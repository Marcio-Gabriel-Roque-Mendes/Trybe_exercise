// Revisitado 11/04/2022
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // For normal
// for (let index = 0; index < numbers.length; index += 1){
//   console.log(index);
// }

// // For in (retorna as posições)
// for (index in numbers){
//   console.log(index);
// }

// // For of retorna o (elemento do array)
for (index of numbers){
  console.log(index);
}