let slideIndex = 0;
carrossel();

function carrossel() {
  let i;
  let slides = document.getElementsByClassName("carrossel");
  let pontos = document.getElementsByClassName("ponto");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" ponto-ativo", "");
  }
  slides[slideIndex - 1].style.display = "block";
  pontos[slideIndex - 1].className += " ponto-ativo";
  setTimeout(carrossel, 4000); // Change image every 2 seconds
}