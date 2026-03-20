const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = form.elements["q"].value;
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
