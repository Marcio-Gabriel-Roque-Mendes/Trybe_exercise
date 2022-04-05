/* ALT + seta (pra cima ou pra baixo) move uma linha com apenas 
o cursor ou move um bloco selecionado */

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let inicial = nomes[0];


function achamaior (a, b){
  for (let indice = 0; indice < a.length; indice += 1){
    if (b.length < a[indice].length){
      b = a[indice]
    }
  }
  
  return b
  /* Antes estava colocando console.log (b), e o resultado 
  era Fernanda seguido de undefined*/

}
console.log(achamaior(nomes, inicial));