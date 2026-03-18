const numbers = [];

while (true) {
  const number = Number(prompt("Enter a number"));

  if (numbers.includes(number)) {
    console.log("The number has been already entered.");
    break;
  }

  numbers.push(number);
}

numbers.sort((a, b) => a - b);

for (const number of numbers) {
  console.log(number);
}
