/*7 - Utilizando for , descubra qual o menor valor contido 
no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0];

for (let i = 1; i < numbers.length; i += 1){
  if (menor > numbers[i]){
    menor = numbers[i]
  }
}
console.log(`O menor numero do array é ${menor}`)