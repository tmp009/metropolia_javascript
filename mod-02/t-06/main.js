const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const ul = document.querySelector("ul");

while (true) {
  const diceRoll = rollDice();
  const li = document.createElement("li");
  li.innerHTML = diceRoll;
  ul.appendChild(li);

  if (diceRoll === 6) {
    break;
  }
}
