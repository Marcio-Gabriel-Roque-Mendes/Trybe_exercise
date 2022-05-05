// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0

// for(let index = 0; index < numbers.length; index += 1){
//   soma += numbers[index];
// }

// let divisao = soma/numbers.length
// console.log(divisao)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for (i = 0; i < numbers.length; i += 1){
  media += numbers[i]
  media = media / numbers.length
}
console.log(media);