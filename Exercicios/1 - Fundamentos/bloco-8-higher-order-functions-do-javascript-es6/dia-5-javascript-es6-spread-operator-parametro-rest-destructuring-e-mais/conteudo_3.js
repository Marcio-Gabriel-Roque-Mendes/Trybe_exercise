// // Array Destructuring

/*
Exercicio 1
Produza o mesmo resultado do código, porém 
utilizando o array destructuring para recolher a 
função e a saudação.
*/
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // saudacoes[1](saudacoes[0]); // Olá

// const [saudacao] = saudacoes
// console.log(saudacao);

/*
Exercicio 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

*/

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [animal, bebida, comida] // <--- Criando o array e o desestruturando, fiz com que os valores aparecessem nas variáveis correspondentes ao seu verdadeiro tipo
console.log(comida, animal, bebida); // arroz gato água
