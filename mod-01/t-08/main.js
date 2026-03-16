startYear = prompt("Enter the start year:");
endYear = prompt("Enter the end year:");

const list = document.querySelector("ul");

for (let year = Number(startYear); year <= Number(endYear); year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    const listItem = document.createElement("li");
    listItem.textContent = year;
    list.appendChild(listItem);
  }
}
