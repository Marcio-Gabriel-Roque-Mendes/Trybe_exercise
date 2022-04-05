/*
Como você pode ver, o arquivo possui um elemento main 
contendo dois elementos filhos: uma <div> e um <p> .
Então, você vai aplicar as propriedades nextSibling e
nextElementSibling para ver a diferença entre elas:
*/ 

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) //<p>elemento</p>

document.getElementsByClassName('uniquep')[0].style.color = 'green'

/*
Observação: para testar o código acima, crie um arquivo 
index.html e outro script.js , copie os códigos e salve os
documentos. Para visualizar as saídas no console, dê start
no Live Server, inspecione a página e abra o console.

Primeiro, foi selecionado o elemento div utilizando o seu id,
'start'. Na sequência, aplicadas as propriedades nextSibling
e nextElementSibling . Você pode ver que, nextSibling
retornará o texto "nó" que representa o próximo nó do DOM a
partir da div , enquanto que, nextElementSibling retornará o 
próximo elemento propriamente, ou seja, o elemento <p> .
*/