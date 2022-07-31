var slideIndex = 0;
carrossel();
var slides, pontos, anterior, proximo;

anterior = document.getElementById("botao-anterior-carrossel");
proximo = document.getElementById("botao-proximo-carrossel");
anterior.addEventListener("click", function () {
  mudarSlides(-1);
});
proximo.addEventListener("click", function () {
  mudarSlides(1);
});

function carrossel() {
  var i;
  slides = document.getElementsByClassName("carrossel");
  pontos = document.getElementsByClassName("ponto");
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
  setTimeout(carrossel, 4000); // Change image every 8 seconds
}

function mudarSlides(position) {
  slideIndex += position;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" ponto-ativo", "");
  }
  slides[slideIndex - 1].style.display = "block";
  pontos[slideIndex - 1].className += " ponto-ativo";
}
