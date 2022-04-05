function valorPositivoOuNegativo(valor) {
  if (valor < 0) {
    return `${valor} é um valor negativo`
  } else if (valor === 0) {
    return `${valor} como pode-se ver é um valor zerado`
  } else {
    return `${valor} é um valor positivo`
  }
}

console.log(valorPositivoOuNegativo(0))