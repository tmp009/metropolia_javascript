const ul = document.querySelector("ul");
const dogs = [];

for (let index = 0; index < 6; index++) {
  const name = prompt(`Dog ${index + 1} name`);

  dogs.push(name);
}

dogs.sort((a, b) => b.localeCompare(a));

for (const name of dogs) {
  const li = document.createElement("li");
  li.innerHTML = name;
  ul.appendChild(li);
}
