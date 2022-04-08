const numeALe = (numero) => {
  const numSort = Math.round(Math.random(1) * 5)
  let numAposta = Math.round(Math.random(numero) * 5)
  if (numSort === numAposta){
    return `Parabéns você ganhou ${numSort}`
  } else {
    return `Tente novamente, ${numSort}`
  }
}

console.log(numeALe(2));