/*
4- Um número primo é aquele divisível apenas por 1 e 
por ele mesmo. Sabendo disso, escreva um algoritmo que
retorne o maior número primo entre 0 e 50.
*/

let maiorNumPrimo = 0;

for (let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1) {
  let isPrime = true; // Esse primeiro for percorre e encontra  
  // o maior numero e qual é o maior numero primo
  for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
    if (numeroAtual % divisorAtual === 0) {
      isPrime = false;
    } // esse segundo for percorre apenas os maiores numeros 
  } // primos e armazena o maior deles
  if (isPrime) {
    maiorNumPrimo = numeroAtual;
  }
}

console.log(maiorNumPrimo);