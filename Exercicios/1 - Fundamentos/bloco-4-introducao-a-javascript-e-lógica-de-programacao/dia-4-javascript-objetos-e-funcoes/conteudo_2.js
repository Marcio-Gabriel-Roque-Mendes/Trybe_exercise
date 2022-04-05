// FOR/IN 
// percorre as propriedades dos objetos que forem enumeráveis
// com base na ordem de inserção

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index);
// }

// FOR/OF
// percorre os elementos dos objetos iteráveis através dos seus
// respectivos valores, e não dos índices como o for/in .

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

console.log('\nQuestão 1: ');
for (ola in names)
  console.log('Olá' , names[ola]);


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

console.log('\nQuestão 2: ');
for (objetos in car){
  console.log(objetos , car[objetos]);
}