const ol = document.querySelector("ol");
const participants = [];
const participantCount = Number(prompt("How many participants?"));

for (let index = 0; index < participantCount; index++) {
  const name = prompt(`Person ${index + 1} name`);

  participants.push(name);
}

participants.sort((a, b) => a.localeCompare(b));

for (const name of participants) {
  const li = document.createElement("li");
  li.innerHTML = name;
  ol.appendChild(li);
}
