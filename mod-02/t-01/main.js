const numbersInput = prompt("Input five numbers (separated by spaces)");

numbers = numbersInput.split(" ");

for (let i = 0; i < 5; i++) {
  console.log(numbers[numbers.length - i - 1]);
}
