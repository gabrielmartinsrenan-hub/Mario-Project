console.log("OLÁ, MUNDO!");

/*
  Caixinha para guardar informações que serão utilizadas.

  Palavras para criar variáveis:
  var   // não é mais recomendado
  let
  const
*/
const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mask-formulario");

formulario.addEventListener("click", () => {
  if (!formulario.classList.contains("ativo")) {
    mostrarform();
  }
});

function mostrarform() {
  formulario.classList.add("ativo");
  mascara.classList.add("ativo");
}

function esconderform() {
  formulario.classList.remove("ativo");
  mascara.classList.remove("ativo");
}