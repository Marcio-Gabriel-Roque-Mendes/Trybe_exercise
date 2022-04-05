/*
LADO B COM QUERY SELECTOR
Exercicio I do Conteúdo

1 - Recupere o elemento que contém o título da página e faça
algo com ele, como alterá-lo para o nome do seu filme 
favorito.
*/
document.querySelector('#page-title').innerText = 'Thor: O Mundo Sombrio'
document.querySelectorAll('h2')[0].style.color = '#85002f'
/*
2 - Agora recupere o segundo parágrafo e use sua 
criatividade para alterá-lo.
*/

document.querySelector('#paragraph').innerText = 'Odiado por muitas pessoas, muitas mesmo, mas é um filme que eu gosto muito'

/*
3 - Por fim, recupere o subtítulo e altere-o também
*/

document.querySelector('#subtitle').innerText = 'Sinopse:'

/*
4 - Alterando o segundo parágrafo
*/ 

document.querySelector('#second-paragraph').innerText = 'Thor precisa contar com a ajuda de seus companheiros e até de seu traiçoeiro irmão Loki em um plano audacioso para salvar o universo. Entretanto, os caminhos de Thor se cruzam com Jane Foster e, dessa vez, a vida dela está realmente em perigo.'
document.querySelectorAll('p')[1].style.color = '#91325c'
/*
Exercicio II do Conteúdo

1 - Adicione uma classe igual para os dois parágrafos.
*/

// Feito

/*
2 - Recupere os seus parágrafos via código JavaScript ,
usando a função getElementsByClassName 
*/
/*No inspecionar do browser*/

console.log(document.querySelectorAll('.paragrafos'))

/*
3 - Altere algum estilo do primeiro deles.
*/

//document.getElementsByClassName('paragrafos')[1].style.color = '#361b4b'
document.querySelectorAll('.paragrafos')[0].style.color = 'brown'

/*
4 - Recupere o subtítulo e altere a cor dele usando a
função getElementsByTagName 
*/

document.querySelectorAll('h4')[0].style.color = '#672955'
document.querySelectorAll('.sub')[0].style.fontSize = '19px'

//Div final
let corpo = document.querySelector('body');

let divFInal =  document.createElement('div')
divFInal.innerText = '* Pagina Feita a partir do querySelector e querySelectorAll'
corpo.appendChild(divFInal)

// Estilizando a nova div 
document.querySelectorAll('div')[0].style.color = 'green'
document.querySelectorAll('div')[0].style.marginTop = '100px' 

