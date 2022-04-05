/*
1 - Acesse o elemento elementoOndeVoceEsta 

Visualização pelo no Browse
*/
console.log(document.getElementsByTagName('section')[2]); 

/*
2 - Acesse pai a partir de elementoOndeVoceEsta e adicione
uma color a ele.
*/

document.getElementsByTagName('section')[2].parentElement.style.color = 'blueviolet';

/*
3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
Você se lembra dos vídeos da aula anterior, como fazer isso?
*/

document.getElementById('primeiroFilho').innerText = 'O Primogênito'

/*
4 - Acesse o primeiroFilho a partir de pai .

Visualização pelo no Browser
*/

document.querySelector('#pai #primeiroFilho')

/*
5 - Agora acesse o primeiroFilho a partir de 
elementoOndeVoceEsta .
*/

document.querySelector('#elementoOndeVoceEsta').parentElement.firstElementChild

/*
6 - Agora acesse o texto Atenção! a partir de
elementoOndeVoceEsta .
*/

document.querySelector('#elementoOndeVoceEsta').nextSibling

/*
7 - Agora acesse o terceiroFilho a partir de 
elementoOndeVoceEsta .
*/
document.querySelector('#elementoOndeVoceEsta').nextElementSibling

/*
8 - Agora acesse o terceiroFilho a partir de pai.
*/
document.querySelector('#pai').lastElementChild.previousElementSibling

/**/
/**/