/*
1 - Remova todos os elementos filhos de paiDoPai exceto 
pai , elementoOndeVoceEsta e primeiroFilhoDoFilho 
*/

let fatherOfTheFather = document.querySelector('#paiDoPai');
let firstChild = document.querySelector('#primeiroFilho');
let secondAndLastChildOftheChild = document.querySelector('#segundoEUltimoFilhoDoFilho');
let thirdChild = document.querySelector('#terceiroFilho');
let fourthChildAndLastChild = document.querySelector('#quartoEUltimoFilho')

// Usando a variavel criada acima
firstChild.parentNode.removeChild(firstChild)
secondAndLastChildOftheChild.parentNode.removeChild(secondAndLastChildOftheChild)

// Fazendo o caminho completo
document.querySelector('#terceiroFilho').parentNode.removeChild(document.querySelector('#terceiroFilho'))
document.querySelector('#quartoEUltimoFilho').parentNode.removeChild(document.querySelector('#quartoEUltimoFilho'))

// Para REMOVER DINAMICAMENTE aqui pelo js o NÓ com o texto 
//'ATENÇÃO' posso usar o
// document.querySelector('#pai').childNodes[3].remove()