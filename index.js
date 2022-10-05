// Calculadora de Financiamento

/*
Exemplo:
R1: 10.000 x 1,2% - 25% = R$ 90,00
R2: 10.000 x 2,4% - 25% = R$ 180,00
R3: 10.000 x 3,6% - 25% = R$ 270,00
R4: 10.000 x 4,8% - 25% = R$ 360,00
R5: 10.000 x 6,0% - 25% = R$ 450,00
*/

// Função que ativa o botão de calculo
function calcular() {
  let n1 = parseFloat(document.getElementById("valorFi").value);
  
  // Calcula o financiamento 
  let resultado0 = Number((n1*(1.2/100))-(n1*(1.2/100)*(25/100)));
  let resultado1 = Number((n1*(2.4/100))-(n1*(2.4/100)*(25/100)));
  let resultado2 = Number((n1*(3.6/100))-(n1*(3.6/100)*(25/100)));
  let resultado3 = Number((n1*(4.8/100))-(n1*(4.8/100)*(25/100)));
  let resultado4 = Number((n1*(6.0/100))-(n1*(6.0/100)*(25/100)));

  // valida o conteudo que foi pego no input
  if (resultado0.toString() === "NaN") return;
  if (resultado1.toString() === "NaN") return;
  if (resultado2.toString() === "NaN") return;
  if (resultado3.toString() === "NaN") return;
  if (resultado4.toString() === "NaN") return;
  // Sai da função quando da erro 
document.querySelector(".result0").innerText =
    "R1: A rentabilidade será de R$ " + resultado0.toFixed(2);
document.querySelector(".result1").innerText =
    "R2: A rentabilidade será de R$" + resultado1.toFixed(2);
document.querySelector(".result2").innerText =
    "R3: A rentabilidade será de R$" + resultado2.toFixed(2);
document.querySelector(".result3").innerText =
    "R4: A rentabilidade será de R$" + resultado3.toFixed(2);
document.querySelector(".result4").innerText =
    "R5: A rentabilidade serś de R$" + resultado4.toFixed(2);  
}

// Função que limpa as entradas de dados
function limpar() {
  document.getElementById("valorFi").value = null;
  document.querySelector(".result0").innerText = "" 
  document.querySelector(".result1").innerText = ""
  document.querySelector(".result2").innerText = ""
  document.querySelector(".result3").innerText = ""
  document.querySelector(".result4").innerText = ""
     
}
  
