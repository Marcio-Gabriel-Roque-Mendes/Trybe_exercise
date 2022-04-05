/*
Exercicio I do Conteúdo

1 - Recupere o elemento que contém o título da página e faça
algo com ele, como alterá-lo para o nome do seu filme 
favorito.
*/
document.getElementById("page-title").innerText = 'Thor: O Mundo Sombrio'

/*
2 - Agora recupere o segundo parágrafo e use sua 
criatividade para alterá-lo.
*/

document.getElementById('paragraph').innerText = 'Odiado por muitas pessoas, muitas mesmo, mas é um filme que eu gosto muito'

/*
3 - Por fim, recupere o subtítulo e altere-o também
*/

document.getElementById('subtitle').innerText = 'Sinopse:'

/*
4 - Alterando o segundo parágrafo
*/ 

document.getElementById('second-paragraph').innerText = 
'Thor precisa contar com a ajuda de seus companheiros e até de seu traiçoeiro irmão Loki em um plano audacioso para salvar o universo. Entretanto, os caminhos de Thor se cruzam com Jane Foster e, dessa vez, a vida dela está realmente em perigo.'

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
document.getElementsByClassName('paragrafos')[0].innerText

/*
3 - Altere algum estilo do primeiro deles.
*/

document.getElementsByClassName('paragrafos')[1].style.color = '#361b4b'

/*
4 - Recupere o subtítulo e altere a cor dele usando a
função getElementsByTagName 
*/
document.getElementsByTagName('h4')[0].style.fontSize = '19px'
document.getElementsByTagName('h4')[0].style.color = 'blue'