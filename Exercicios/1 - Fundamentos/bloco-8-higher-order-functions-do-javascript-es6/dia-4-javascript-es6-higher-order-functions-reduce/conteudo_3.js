const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// existe uma maneira de fazer usando o filter e reduce
// e outra maneira usando apenas o reduce

/*
EXERCICIO
Para fixar ainda mais conceito de reduce , faça uma função 
que some todos os números pares do array:
*/

const somaPares = (acumulador, valor) => (
  (valor % 2 === 0) ? acumulador + valor : acumulador
)
  
somaValores = array => array.reduce(somaPares, 0);

console.log(somaPares(numbers, 0));