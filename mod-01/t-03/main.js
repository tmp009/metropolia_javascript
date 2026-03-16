num1 = prompt("Enter the first number:");
num2 = prompt("Enter the second number:");
num3 = prompt("Enter the third number:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

sum = num1 + num2 + num3;
product = num1 * num2 * num3;
average = sum / 3;

document.body.innerHTML =
  "The sum of the numbers is: " +
  sum +
  "<br>" +
  "The product of the numbers is: " +
  product +
  "<br>" +
  "The average of the numbers is: " +
  average.toFixed(2) +
  "<br>";
