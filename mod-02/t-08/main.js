const concat = (stringArray) => {
  let concatString = "";
  for (const string of stringArray) {
    concatString += string;
  }
  return concatString;
};

const words = ["this", "is", "an", "example"];
const concatWords = concat(words);
document.body.innerText = concatWords;
