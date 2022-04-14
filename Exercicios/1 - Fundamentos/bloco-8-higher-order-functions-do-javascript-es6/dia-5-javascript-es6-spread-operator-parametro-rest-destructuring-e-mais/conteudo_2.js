// // Object Destructuring

// /*
// Você deve estar se perguntando. "E se a chave do objeto
//  contiver outro objeto como valor?" Veja o exemplo 
//  abaixo e entenda como podemos resolver este problema:

//  Queremos extrair o nome do personagem, a idade, 
//  o nome do planeta e verificar se ele é um Jedi. 
//  Depois de feito, precisamos imprimir essas 
//  informações no console.log() , para isso, vamos 
//  utilizar a desestruturação de objetos:

// */ 
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// // Exercicio 1

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const {name, age, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;

console.log(`A funcionária ${name} tem ${age} anos, sua nacionalidade é ${nationality}, e atualmente ela ocupa o cargo de ${profession} na empresa e o seu time é ${squad} que é conhecido pelas seguintes iniciais: ${squadInitials}`)