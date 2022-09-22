// Calculo de financiamento

// Função que ativa o botão de calculo
function calcular() {
  let n1 = parseFloat(document.getElementById("valorFi").value);
  let n2 = parseFloat(document.getElementById("taxaJuro").value);

  // Calcula o financiamento 
  let r = Number((n1 * (n2/100) - (25/100)));
  // valida o conteudo que foi pegado no input
  if (r.toString() === "NaN") return;
  // Sai da função quando da erro 
  document.querySelector(".result").innerText =
    "A rentabilidade sera de R$" + r.toFixed(2);

}

// Função que limpa as entradas de dados
function limpar() {
  document.getElementById("valorFi").value = null;
  document.getElementById("taxaJuro").value = null;
  document.querySelector(".result").innerText = "\n";
}
