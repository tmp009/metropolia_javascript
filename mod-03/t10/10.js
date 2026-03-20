const target = document.getElementById("target");
const form = document.getElementById("source");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstname = form.elements["firstname"].value;
  const lastname = form.elements["lastname"].value;

  const message = `Your name is ${firstname} ${lastname}`;
  target.innerText = message;
});
