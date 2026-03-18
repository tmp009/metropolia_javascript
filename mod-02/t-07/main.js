const rollDice = (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};

const ul = document.querySelector("ul");

const sides = Number(prompt("Enter the number of sides for the dice"));

while (true) {
  const diceRoll = rollDice(sides);
  const li = document.createElement("li");
  li.innerHTML = diceRoll;
  ul.appendChild(li);

  if (diceRoll === sides) {
    break;
  }
}
