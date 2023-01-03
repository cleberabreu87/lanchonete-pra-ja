const m = document.getElementsByClassName("menu-hamburguer")[0];
const d = document.getElementsByClassName("dropdown-content")[0];
m.addEventListener("click", function () {
  if (d.style.display === "block") {
    d.style.display = "none";
  } else {
    d.style.display = "block";
  }
});
