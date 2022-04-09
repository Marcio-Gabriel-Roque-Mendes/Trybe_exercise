/*
Spoiler - alert: para os exercícios do dia, os métodos split,
 join e reverse podem ser muito úteis.

Crie uma função que receba uma string e retorne true se
for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara.
verificaPalindrome('arara');
Retorno esperado: true
verificaPalindrome('desenvolvimento');
Retorno esperado: false
*/


function verificaSeEPalindromo(palavra) {
  let myString = palavra
  let fazArray = myString.split('')
  let reverte = fazArray.reverse();
  let palvReunida = reverte.join('')

  if (palavra === palvReunida) {
    return `${palavra} é um palindromo`
  } else {
    return `Não é um palindromo`
  }
}

console.log(verificaSeEPalindromo('ioio'));

module.exports = exerc_1.js;