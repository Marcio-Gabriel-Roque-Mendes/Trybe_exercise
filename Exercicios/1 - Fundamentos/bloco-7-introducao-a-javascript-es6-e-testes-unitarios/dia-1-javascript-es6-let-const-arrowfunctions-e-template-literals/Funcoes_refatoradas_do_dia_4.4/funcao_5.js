const maiorDosTresNumeros = (valor1, valor2, valor3) => {
  if (valor1 > valor2 && valor1 > valor3){
    return `${valor1} é o maior entre os 3 números`
  } else if (valor2 > valor1 && valor2 > valor3) {
      return `${valor2} é o maior entre os 3 números`
  } else {
      return `${valor3} é o maior entre os 3 números`
  }
}

console.log(maiorDosTresNumeros(765,1234,987))