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

Exercício 8:

Implemente uma função que adiciona uma legenda com cor para
a tarefa criada no exercício anterior. Esta função deverá 
receber como parâmetro uma string ("cor") e criar 
dinamicamente um elemento de tag <div> com a classe task .

O parâmetro cor deverá ser utilizado como cor de fundo da 
<div> criada.

O elemento criado deverá ser adicionado como filho/filha 
da tag <div> que possui a classe "my-tasks" .

*/