function maiorNumero (priNum, segNum){
  if (priNum > segNum) {
    return(`${priNum} é o maior numero`)
  } else {
    return(`${segNum} é o maior numero`)
  }
}

console.log(maiorNumero(1234, 9860) + 'normal')
