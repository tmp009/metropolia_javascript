const form = document.querySelector("form");
const resultsDiv = document.getElementById("results");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = form.elements["q"].value;
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  fetch(url)
    .then((response) => response.json())
    .then(showResults)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

/*
{
    "score": 0.5711899,
    "show": {
        "id": 52491,
        "url": "https://www.tvmaze.com/shows/52491/wonder-egg-priority",
        "name": "Wonder Egg Priority",
        "type": "Animation",
        "language": "Japanese",
        "genres": [
            "Anime",
            "Fantasy"
        ],
        "status": "Ended",
        "runtime": 25,
        "averageRuntime": 25,
        "premiered": "2021-01-12",
        "ended": "2021-06-30",
        "officialSite": "https://wonder-egg-priority.com",
        "schedule": {
            "time": "01:29",
            "days": [
                "Tuesday"
            ]
        },
        "rating": {
            "average": 7.2
        },
        "weight": 44,
        "network": {
            "id": 137,
            "name": "NTV",
            "country": {
                "name": "Japan",
                "code": "JP",
                "timezone": "Asia/Tokyo"
            },
            "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": null,
            "thetvdb": 390028,
            "imdb": null
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/292/730732.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/292/730732.jpg"
        },
        "summary": "<p><b>Wonder Egg Priority </b>is about a 14-year-old girl named Ai Ohto who recieves an egg after hearing a mysterious voice whilst out walking late at night. This egg beckons to her: \"If you wish to change the future, you need only choose now. Now, believe in yourself, and smash the egg.\"</p>",
        "updated": 1720461657,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/52491"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/2056317",
                "name": "My Priority"
            }
        }
    }
}
*/
const showResults = (jsonResponse) => {
  resultsDiv.innerHTML = "";
  for (const item of jsonResponse) {
    const itemShow = item.show;
    const article = document.createElement("article");
    const title = document.createElement("h2");
    title.innerText = itemShow.name;
    article.appendChild(title);

    const clickableLink = document.createElement("a");

    clickableLink.href = itemShow.url;
    clickableLink.innerText = "Link";
    clickableLink.target = "_blank";

    const image = document.createElement("img");
    image.src = itemShow.image?.medium;
    image.alt = itemShow.name;

    const summaryDiv = document.createElement("div");
    summaryDiv.innerHTML = itemShow.summary;

    resultsDiv.appendChild(article);
    resultsDiv.append(clickableLink);
    resultsDiv.appendChild(image);
    resultsDiv.appendChild(summaryDiv);
  }
};
