const numbers = [50, 85, -30, 3, 15];
// let maiorNum = 0;

// const qualEMaior = (numeros, maiorNumber) =>{
//   for (let indice = 0; indice <= numeros.length; indice += 1){
//     maiorNumber += indice;
//     if (maiorNumber > indice){
//       console.log(`maiorNum ${maiorNumber} é maior`)
//     } else {
//       console.log(`indice ${indice} é maior`)
//     }
//   }
// }

// console.log(qualEMaior(numbers, maiorNum));

const maiorNum = (maior, numeros) => ((maior > numeros) ? maior : numeros);

const qualEMaior = numbers.reduce(maiorNum, 100)
console.log(qualEMaior);