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

    if (itemShow.image) {
      image.src = itemShow.image.medium;
    } else {
      image.src = "./placeholder.png";
    }
    image.alt = itemShow.name;

    const summaryDiv = document.createElement("div");
    summaryDiv.innerHTML = itemShow.summary;

    resultsDiv.appendChild(article);
    resultsDiv.append(clickableLink);
    resultsDiv.appendChild(image);
    resultsDiv.appendChild(summaryDiv);
  }
};
