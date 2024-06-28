console.log("teste");
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    const nota4 = parseFloat(document.getElementById('nota4').value) || 0;
    const notaMedia = (nota1 + nota2 + nota3 + nota4) / 4;
    const calculoMedia = document.getElementById('calculoMedia');
  
    if (notaMedia >= 6) {
      calculoMedia.innerText = `Parabéns, você está aprovado! Sua média é ${notaMedia.toFixed(2)}`;
    } else {
      calculoMedia.innerText = `Reprovado, continue tentando. Sua média é ${notaMedia.toFixed(2)}`;
    }
  }
  