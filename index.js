function calculaIMC(peso, altura) {
  return Number((peso / altura ** 2).toFixed(1));
}
function dizFrase(frase){
    document.querySelector('#saida').innerHTML =  `<p>${frase}</p>`
}
function calcula() {
  const imc = calculaIMC(peso.value, altura.value);
  let categoria;
  let frase;
  if (imc > 40) {
    categoria = "com Obesidade grau III.";
  } else if (imc >= 35) {
    categoria = "com Obesidade grau II.";
  } else if (imc >= 30) {
    categoria = "com Obesidade grau I.";
  } else if (imc >= 25) {
    categoria = "Acima do peso.";
  } else if (imc >= 20) {
    categoria = "Peso normal.";
  } else if (imc >= 17) {
    categoria = "Abaixo do peso.";
  } else if (imc<17) {
    categoria = "Muito abaixo do peso.";
  }else{
    frase = 'Você informou um valor inválido, tente novamente.'
    dizFrase(frase)
    return 1
  }
  frase = `${nome.value} seu IMC é ${imc} e você está ${categoria}`
  dizFrase(frase)
}
