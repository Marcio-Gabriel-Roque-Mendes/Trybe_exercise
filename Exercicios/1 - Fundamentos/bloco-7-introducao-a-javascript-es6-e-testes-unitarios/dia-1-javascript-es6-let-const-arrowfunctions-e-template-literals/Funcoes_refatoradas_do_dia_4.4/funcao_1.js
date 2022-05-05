const verificaSeEPalindromo = (palavra) => {
  let myString = palavra
  let fazArray = myString.split('')
  let reverte = fazArray.reverse();
  let palvReunida = reverte.join('')

  return palavra === palvReunida ? `${palavra} é um palindrom` : `Não é um palindromo`
}

console.log(verificaSeEPalindromo('ioio'));