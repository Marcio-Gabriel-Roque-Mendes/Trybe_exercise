/*
1- O fatorial é a multiplicação de um número natural 
pelos seus antecessores, exceto o zero.
*/


var fatorialDe10 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// 10!
let mult = 10;

for (let index = 0; index < fatorialDe10.length; index += 1) {
  mult = mult * fatorialDe10[index]
  console.log(mult);
}