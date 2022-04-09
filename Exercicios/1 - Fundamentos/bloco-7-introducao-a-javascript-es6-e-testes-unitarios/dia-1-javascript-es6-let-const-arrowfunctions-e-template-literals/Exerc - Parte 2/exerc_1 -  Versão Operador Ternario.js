let numero = 4
const fatorialDoNumero = num => num > 1 ? num * (fatorialDoNumero(num - 1)) : 1
console.log(fatorialDoNumero(numero));

/* 
   Porque no caso acima dá 24 enquanto no caso abaixo da 12 
*/

let numero = 4
const fatorialDoNumero = num => num > 1 ? num * (num - 1) : 1
console.log(fatorialDoNumero(numero));