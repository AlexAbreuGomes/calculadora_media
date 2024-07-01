    // calculoMedia.js
 // Função para calcular a média
 // o código está transformando os valores de texto dos elementos <li> em números de
 // ponto flutuante e armazenando esses números no array notas.
 function calcularMedia() {
    const nome = localStorage.getItem("nome"); // Recupera o valor de nome do localStorage
    const listaNotas = document.getElementById("listaNotas");
    const notas = Array.from(listaNotas.getElementsByTagName("li")).map((item) =>
      parseFloat(item.textContent)
    );
  // O código abaixo aplica a função de redução a um array de notas, usando uma função
  // de callback para somar cada elemento do array e retornar o valor total.
  // A função de callback recebe dois parâmetros: o total acumulado e cada elemento
  // do array.

  const notaMedia =
    notas.reduce((total, nota) => total + nota, 0) / notas.length;
  const calculoMedia = document.getElementById("calculoMedia");

  // Limite de notas
  if (notas.length === 7) {
    setTimeout(() => {
      calculoMedia.innerText = "";
    }, 2000); // 2 segundos
    alert("Por favor, remova algumas notas antes de calcular a média.");
    return;
  }

  // Atualização da média
  calculoMedia.innerText =
    notaMedia >= 6
      ? `${nome} Parabéns, você está aprovado! Sua média é ${notaMedia.toFixed(2)}`
      : `Reprovado, continue tentando. Sua média é ${notaMedia.toFixed(2)}`;
      listaNotas.innerHTML = "";
}
