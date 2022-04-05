/*
3- Considere o array de strings abaixo:
Escreva dois algoritmos: um que retorne a maior palavra 
deste array e outro que retorne a menor. Considere o 
número de caracteres de cada palavra.
*/

let array = ['java', 'javascript', 'python', 'html', 'css'];
let achamaior = array[4]
let achamenor = array[0]

for (let i = array.length - 1; i >= 0; i -= 1){
  if (achamaior.length < array[i].length){
    achamaior = array[i];
  } 
}

for (let index = 0; index < array.length; index += 1){
  if (achamenor.length > array[index].length)
    achamenor = array[index]
}

console.log(achamaior);
console.log(achamenor);

