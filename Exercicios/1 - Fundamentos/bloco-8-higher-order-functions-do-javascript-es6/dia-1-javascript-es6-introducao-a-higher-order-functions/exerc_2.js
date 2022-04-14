const numeALe = (numero, callback) => {
  const numSort = Math.round(Math.random(1) * 5)
  let numAposta = numero;
  return callback(numSort, numAposta)
}

const verificaNumero = (sorteado, apostado) =>{
  if (sorteado === apostado){
    return `parabéns você ganhou ${sorteado}`
  } else {
    return `tente novamente, voce apostou que seria ${apostado} o numero sorteado foi ${sorteado}`
  }
}


const nomePessoas = (nome, sorteio, funcao) => {
  return `${nome} ${numeALe(sorteio, funcao)}`
};

console.log(nomePessoas('Rivaldo', 3, verificaNumero));
console.log(nomePessoas('Luisa', 1, verificaNumero));