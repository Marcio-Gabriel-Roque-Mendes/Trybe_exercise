let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

console.log('Questão 2 - A jogadora' , name , lastName , 'tem' , age , 'anos de idade');

medals['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('\nQuestão 3 -' , medals);

console.log('\nQuestão 4 - a jogadora', name , lastName, 'foi eleita a melhor jogadora do mundo por' , medals.bestInTheWorld.length , 'vezes');

console.log('\nQuestão 5 - a jogadora possui', medals.golden , 'medalhas de ouro e' , medals.silver , 'medalhas de prata');