const throws = Number(prompt("Input the number of dice to roll"));
let total = 0;

for (let i = 0; i < throws; i++) {
  const dice = Math.floor(Math.random() * 6) + 1;
  total += dice;
}

document.body.innerHTML += `Total: ${total}`;
