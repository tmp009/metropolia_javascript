const numbers = [];
while (true) {
  const number = prompt("Enter a number (enter 0 to stop):");

  if (number === "0") {
    break;
  }

  numbers.push(Number(number));
}

numbers.sort((a, b) => b - a);

for (const number of numbers) {
  console.log(number);
}
