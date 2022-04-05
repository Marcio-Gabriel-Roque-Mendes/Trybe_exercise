/*
9 - Utilizando o array criado no exercício anterior
imprima o resultado da divisão de cada um dos elementos
por 2 .
*/
let numbs = 25;
let lista = [];
let dividida = []

for (let i = 1; i <= numbs; i += 1) {
  lista.push(i);
  dividida.push(i/2);
}

console.log(lista);
console.log(dividida);
