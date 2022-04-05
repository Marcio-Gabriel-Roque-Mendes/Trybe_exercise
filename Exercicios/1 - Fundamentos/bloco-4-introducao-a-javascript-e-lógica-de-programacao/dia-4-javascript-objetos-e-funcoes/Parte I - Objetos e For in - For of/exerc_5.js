let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

// info.personagem = ['Margarida' , 'Tio Patinhas']
// SE EU QUISESSE ATRIBUIR OUTRO VALOR A CHAVE NA LINHA TERIA QUE
// TRANSFORMAR ELE EM UM ARRAY, COMO AQUI EM CIMA, MAS NÃO É
// ISSO QUE O ENUNCIADO PEDE, ELE QUER CONCATENAR 2 OBJETOS

let nova = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'último MacPatinhas',
  recorrente: 'Ambos recorrentes'
};

console.log(info.personagem, 'e' ,nova.personagem);
console.log(info.origem, 'e' ,nova.origem);
console.log(info.nota, 'e' ,nova.nota);
console.log(nova.recorrente);