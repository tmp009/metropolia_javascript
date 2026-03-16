const name = prompt("What is your name?");

const randomIndex = Math.floor(Math.random() * 4) + 1;
let className = "";

switch (randomIndex) {
  case 1:
    className = "Gryffindor";
    break;
  case 2:
    className = "Slytherin";
    break;
  case 3:
    className = "Hufflepuff";
    break;
  case 4:
    className = "Ravenclaw";
    break;
}

document.body.innerHTML = name + ", you are " + className + ".";
