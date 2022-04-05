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

Exercício 10:

Implemente uma função que adiciona um evento que, ao clicar 
em um dia do mês no calendário, atribua a este dia a cor da
legenda da sua tarefa selecionada.

Ao clicar novamente no dia com a cor da legenda, a sua cor 
deverá voltar à configuração inicial rgb(119,119,119) .

*/