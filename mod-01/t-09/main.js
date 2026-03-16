const input = prompt("Enter an integer:");
const number = Number(input);

if (isNaN(number) || number < 2) {
  document.body.innerHTML =
    "Please enter an integer greater than or equal to 2.";
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.body.innerHTML = `${number} is a prime number.`;
  } else {
    document.body.innerHTML = `${number} is not a prime number.`;
  }
}
