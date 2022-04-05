function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/*

Exercício 7:

Implemente uma função que adiciona uma tarefa personalizada 
ao calendário. A função deve receber como parâmetro a string 
com o nome da tarefa (ex: "cozinhar") e criar dinamicamente 
um elemento com a tag <span> contendo a tarefa.

O elemento criado deverá ser adicionado como filho/filha da 
tag <div> que possui a classe "my-tasks" .

*/