const target = document.getElementById("target");

target.addEventListener("mouseover", (e) => {
  target.src = "img/picB.jpg";
});

target.addEventListener("mouseleave", (e) => {
  target.src = "img/picA.jpg";
});
