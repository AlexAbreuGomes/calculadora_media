const adicionarNome = document.getElementById("inNome");
const botaoNome = document.getElementById("botaoNome");

botaoNome.addEventListener("click", function () {
  const nome = adicionarNome.value;
  localStorage.setItem("nome", nome); // Armazena o valor de nome no localStorage
  console.log(`O nome digitado foi adicionado: ${nome}`);
});
// Evento de clique para adicionar notas
const botaoAdicionarNota = document.getElementById("adicionarNota");
botaoAdicionarNota.addEventListener("click", adicionarNota);

//escuta o Evento de teclado para calcular a média se o botao 'space' for pressionado
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    adicionarNota();
  }
});

// Evento de clique para calcular a média
const botaoCalcularMedia = document.getElementById("calcularMedia");
botaoCalcularMedia.addEventListener("click", calcularMedia);

//escuta o Evento de teclado para calcular a média se o botao 'enter' for pressionado
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcularMedia();
  }
});
