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

Exercício 4:

Implemente uma função que receba como parâmetro a string
"Sexta-feira" e crie dinamicamente um botão com o nome 
"Sexta-feira".

Adicione a este botão o ID "btn-friday".

Adicione este botão como filho/filha da tag <div> com classe
"buttons-container" .

*/ 