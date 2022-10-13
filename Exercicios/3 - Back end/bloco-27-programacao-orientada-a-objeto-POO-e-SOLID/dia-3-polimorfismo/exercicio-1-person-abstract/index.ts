// ./index.ts

import Person from './personRefatorado';
import Student from './studentsRefatorado';

// tentar fazer isso agora deve gerar um erro
// já que nossa classe se tornou abstrata e não podemos criar instânicas de classes abstratas
const pessoa = new Person('Carolina da Silva', new Date('2005/03/17'));

// isso não deve gerar nenhum erro
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);