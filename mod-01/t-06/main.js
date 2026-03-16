const shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate) {
  const input = prompt("Enter a number:");
  const number = Number(input);
  if (!isNaN(number) && number >= 0) {
    document.body.innerHTML = `The square root of ${number} is ${Math.sqrt(number)}`;
  } else {
    document.body.innerHTML =
      "The square root of a negative number is not defined";
  }
} else {
  document.body.innerHTML = "The square root is not calculated.";
}
