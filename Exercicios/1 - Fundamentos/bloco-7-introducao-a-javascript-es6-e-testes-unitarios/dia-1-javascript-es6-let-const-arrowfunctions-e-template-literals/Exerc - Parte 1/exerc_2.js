/*
Exercicio 2

Faça uma função que retorne o array oddsAndEvens em ordem crescente.

Utilize template literals para que a chamada 
console.log(<seu código>oddsAndEvens<seu código>); retorne 
"Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). 
Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

//   function ordenada (listaAOrdenar) {
//     listaAOrdenar.sort()
//     return listaAOrdenar
//   }

const array = [13, 3, 4, 10, 7, 2];

const ordenaSeuArray = (arrayQueSeQuerOrdenar) => {
const arrayOrdenada = arrayQueSeQuerOrdenar.sort((a, b) => {   
  if (a < b){
    return -1
  }
  if (a > b){
    return 1
  }
  return 0
})
return `Os números ${arrayOrdenada} se encontram ordenados de forma crescente!`
}

console.log(ordenaSeuArray(array)); 
