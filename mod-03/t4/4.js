"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

const target = document.getElementById("target");
for (const student of students) {
  const element = document.createElement("option");
  element.innerText = student.name;
  element.value = student.id;
  target.appendChild(element);
}
