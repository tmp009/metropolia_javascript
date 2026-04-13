const SCHOOL_COORDS = { lat: 60.22305, lon: 24.75856 };

let map, routeLayer;

const form = document.getElementById("route-form");
const addressInput = document.getElementById("address");
const timesDiv = document.getElementById("times");
const errorDiv = document.getElementById("error");
const API_KEY = "";

function initMap() {
  map = L.map("map").setView([SCHOOL_COORDS.lat, SCHOOL_COORDS.lon], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
}

async function geocodeAddress(address) {
  const url = `https://api.digitransit.fi/geocoding/v1/search?text=${encodeURIComponent(address)}&size=1&digitransit-subscription-key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding failed");

  const data = await res.json();

  if (!data.features || !data.features.length)
    throw new Error("Address not found");
  const [lon, lat] = data.features[0].geometry.coordinates;

  return { lat, lon };
}

async function fetchRoute(from, to) {
  const url = `https://api.digitransit.fi/routing/v2/routers/hsl/index/graphql?digitransit-subscription-key=${API_KEY}`;
  const query = `{
  planConnection(
    origin: {location: {coordinate: {latitude: ${from.lat}, longitude: ${from.lon}}}, label: "Origin"}
    destination: {location: {coordinate: {latitude: ${to.lat}, longitude: ${to.lon}}}, label: "Karaportti, Espoo"}
    first: 2
  ) {
    pageInfo {
      endCursor
    }
    edges {
      node {
        start
        end
        legs {
          from {
            name
          }
          to {
            name
          }
          start {
            scheduledTime
          }
          end {
            scheduledTime
          }
          legGeometry {
            points
          }
          mode
          duration
          realtimeState
        }
        emissionsPerPerson {
          co2
        }
      }
    }
  }
}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/graphql" },
    body: query,
  });
  if (!res.ok) throw new Error("Routing failed");
  const data = await res.json();
  if (!data.data?.planConnection?.edges?.[0]?.node)
    throw new Error("No route found");
  return data.data.planConnection.edges[0].node;
}

const clearRoute = () => {
  if (routeLayer) {
    map.removeLayer(routeLayer);
    routeLayer = null;
  }
};

const showRoute = (routeData) => {
  if (!routeData || !routeData.legs) {
    console.error("No route data found.");
    return;
  }

  clearRoute();

  showTimes(routeData.start, routeData.end, routeData.legs);

  routeLayer = L.featureGroup();

  const colors = {
    WALK: "gray",
    BUS: "blue",
    RAIL: "red",
    SUBWAY: "orange",
  };

  routeData.legs.forEach((leg) => {
    if (!leg.legGeometry?.points) return;

    const coords = decodePolyline(leg.legGeometry.points);

    const line = L.polyline(coords, {
      color: colors[leg.mode] || "black",
      weight: 5,
    });

    routeLayer.addLayer(line);
  });

  routeLayer.addTo(map);

  if (routeLayer.getLayers().length) {
    map.fitBounds(routeLayer.getBounds());
  }
};

const showTimes = (startTime, endTime, legs) => {
  if ((!startTime || !endTime) && legs?.length) {
    startTime = legs[0].start?.scheduledTime;
    endTime = legs[legs.length - 1].end?.scheduledTime;
  }

  const start = new Date(startTime);
  const end = new Date(endTime);

  if (isNaN(start) || isNaN(end)) {
    console.error("Invalid dates:", startTime, endTime);
    timesDiv.textContent = "Trip: invalid time data";
    return;
  }

  const diffMs = end - start;
  const totalMinutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const durationStr = hours > 0 ? `${hours}h ${minutes}m` : `${minutes} min`;

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  timesDiv.textContent = `Trip: ${formatTime(start)} --> ${formatTime(end)} (${durationStr})`;
};
const showError = (msg) => {
  errorDiv.textContent = msg;
};

const clearError = () => {
  errorDiv.textContent = "";
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearError();
  timesDiv.textContent = "";

  try {
    const address = addressInput.value.trim();
    if (!address) throw new Error("Please enter an address");

    const from = await geocodeAddress(address);
    const route = await fetchRoute(from, SCHOOL_COORDS);

    showRoute(route);
  } catch (err) {
    showError(err.message);
    clearRoute();
    timesDiv.textContent = "";
  }
});

const decodePolyline = (str) => {
  let index = 0,
    lat = 0,
    lng = 0,
    coordinates = [];

  while (index < str.length) {
    let b,
      shift = 0,
      result = 0;
    do {
      b = str.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = str.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    coordinates.push([lat / 1e5, lng / 1e5]);
  }

  return coordinates;
};

window.addEventListener("DOMContentLoaded", initMap);
