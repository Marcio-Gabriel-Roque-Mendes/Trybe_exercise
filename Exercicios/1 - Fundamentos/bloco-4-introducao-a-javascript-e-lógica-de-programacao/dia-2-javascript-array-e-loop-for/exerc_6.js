let numbers = [2, 6, 4, 70, 8, 100, 2, 22, 28];
let numImpar = 0;
let contador = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] %2 != 0) {
    numImpar = numbers[index]; 
    contador = contador + 1;
    console.log(numImpar);
  }
   
}

if (contador === 0){
    console.log("nenhum valor ímpar encontrado")
  }

console.log(`O numero total de impares é`, contador);



