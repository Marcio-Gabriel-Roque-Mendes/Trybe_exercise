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

Exercício 5:

Implemente uma função que adicione ao botão "Sexta-feira" um
evento de "click" que modifica o texto exibido nos dias que
são Sexta-feira.

É interessante que este botão possua também a lógica inversa.
Ao ser clicado novamente ele retorna à configuração inicial
exibindo os dias.

*/