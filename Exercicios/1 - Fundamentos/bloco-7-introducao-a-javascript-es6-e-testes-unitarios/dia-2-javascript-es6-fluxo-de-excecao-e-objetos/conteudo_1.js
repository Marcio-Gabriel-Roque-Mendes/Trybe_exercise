// Parte I - Adicionando novas chaves (keys)

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.
// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de 
// uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

function addChave ({chave, valor}){
  {chave: valor };
}

console.log(addChave({'nome', 'alberto'}));