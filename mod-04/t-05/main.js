fetch("https://api.chucknorris.io/jokes/random")
  .then((resp) => resp.json())
  .then((jsonResp) => console.log(jsonResp.value));
