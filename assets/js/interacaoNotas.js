
// interacaoNotas.js

// Função para adicionar uma nota
const adicionarNota = () => {
  const notaInput = document.getElementById("nota");
  const listaNotas = document.getElementById("listaNotas");
  const calculoMedia = document.getElementById("calculoMedia");
  const valor = parseFloat(notaInput.value);

  // Validação de entrada
  if (
    listaNotas.getElementsByTagName("li").length < 6 &&
    !isNaN(valor) &&
    valor >= 0 &&
    valor <= 10
  ) {
    const item = document.createElement("li");
    item.textContent = valor.toFixed(2);

    item.onclick = () => removerNota(item); // Arrow function para remover a nota
    listaNotas.appendChild(item);
    notaInput.value = "";
  } else if (listaNotas.getElementsByTagName("li").length === 6) {
    notaInput.value = "";
    calculoMedia.innerText =
      "Limite de 6 notas atingido. ";
  } else {
    notaInput.value = "";
    calculoMedia.innerText = "Por favor, insira um valor válido entre 0 e 10.";
  }
};

// Função para remover uma nota
const removerNota = (element) => {
  const listaNotas = document.getElementById("listaNotas");
  listaNotas.removeChild(element);
  calculoMedia.innerText = "Nota apagada com sucesso";
};
