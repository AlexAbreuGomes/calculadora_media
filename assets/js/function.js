const adicionarNome = document.getElementById("inNome");
const botaoNome = document.getElementById("calcularMedia");

botaoNome.addEventListener("click",  () =>{
  const nome = adicionarNome.value;
  console.log(`O nome digitado foi adicionado: ${nome}`);
});

// Evento de teclado para adicionar o nome quando a tecla Enter for pressionada
botaoNome.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const nome = adicionarNome.value;
    console.log(`O nome digitado foi adicionado: ${nome}`);
  }
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


