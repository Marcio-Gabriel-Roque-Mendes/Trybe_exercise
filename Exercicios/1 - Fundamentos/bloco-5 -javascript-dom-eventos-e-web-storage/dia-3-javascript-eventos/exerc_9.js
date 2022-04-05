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

Exercício 9:

Implemente uma função que adiciona um evento que, ao clicar
no elemento com a tag <div> referente a cor da sua tarefa, 
atribua a este elemento a classe task selected , ou seja, 
quando sua tarefa possuir a classe task selected , ela estará
selecionada.

Ao clicar novamente no elemento, a sua classe deverá voltar
a ser somente task , ou seja, esta tarefa está deixando de 
ser uma tarefa selecionada.

*/