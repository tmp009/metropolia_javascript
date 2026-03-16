const yearInput = prompt("Enter a year:");
const year = parseInt(yearInput, 10);

if (isNaN(year)) {
  document.body.innerHTML = "Invalid input. Please enter a valid year.";
} else {
  let isLeap = false;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      isLeap = year % 400 === 0;
    } else {
      isLeap = true;
    }
  }
  document.body.innerHTML = `${year} is ${isLeap ? "" : "not "}a leap year.`;
}
