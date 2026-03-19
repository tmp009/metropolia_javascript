const target = document.getElementById("target");

const items = ["First item", "Second item", "Third item"];

for (const item of items) {
  const itemElement = document.createElement("li");
  itemElement.innerText = item;

  target.appendChild(itemElement);
}

target.children.item(1).classList.add("my-item");
