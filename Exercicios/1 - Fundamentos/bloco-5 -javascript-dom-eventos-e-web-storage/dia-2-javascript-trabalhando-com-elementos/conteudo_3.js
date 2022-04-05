/* 
1 - Crie um irmão para elementoOndeVoceEsta .
*/

let novoIrmao = document.createElement('section')
document.querySelector('#pai').appendChild(novoIrmao)

/*
2 - Crie um filho para elementoOndeVoceEsta
*/

let novoFilho = document.createElement('section')
document.querySelector('#elementoOndeVoceEsta').appendChild(novoFilho)

/*
3 - Crie um filho para primeiroFilhoDoFilho
*/

let newSon = document.createElement('section')
document.querySelector('#primeiroFilhoDoFilho').appendChild(newSon)

/*
4 - A partir desse filho criado, acesse terceiroFilho
*/

document.querySelector('#primeiroFilhoDoFilho').lastElementChild.parentElement.parentElement.nextElementSibling


