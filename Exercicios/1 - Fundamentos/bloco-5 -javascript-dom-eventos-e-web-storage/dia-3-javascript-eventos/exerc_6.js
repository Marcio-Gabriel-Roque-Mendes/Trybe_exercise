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

Exercício 6:

Implemente duas funções que criem um efeito de "zoom". Ao
passar o ponteiro do mouse em um dia do mês no calendário,
o texto desse dia deve aumentar e, quando o ponteiro do 
mouse sair do dia, o texto deve retornar ao tamanho original.

Dica - Propriedade: event.target .

*/