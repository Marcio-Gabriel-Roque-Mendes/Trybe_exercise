let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let inicial = nomes[0];


const achaMaior = (nomeDaPrimPessoa, nomeDaSegPessoa) => {
  for (let indice = 0; indice < nomeDaPrimPessoa.length; indice += 1){
    if (nomeDaSegPessoa.length < nomeDaPrimPessoa[indice].length){
      nomeDaSegPessoa = nomeDaPrimPessoa[indice]
    }
  }
return nomeDaSegPessoa
}
console.log(achaMaior(nomes, 'Benedict'));