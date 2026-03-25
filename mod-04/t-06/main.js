document.getElementById("joke-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const query = document.getElementById("query").value;

  fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then((resp) => resp.json())
    .then((jsonResp) => showJokes(jsonResp.result));
});

const showJokes = (jokes) => {
  const resultsDiv = document.getElementById("joke-results");
  resultsDiv.innerHTML = "";

  jokes.forEach((joke) => {
    const jokeP = document.createElement("p");
    const jokeArticle = document.createElement("article");
    jokeP.textContent = joke.value;
    jokeArticle.appendChild(jokeP);
    resultsDiv.appendChild(jokeArticle);
  });
};
