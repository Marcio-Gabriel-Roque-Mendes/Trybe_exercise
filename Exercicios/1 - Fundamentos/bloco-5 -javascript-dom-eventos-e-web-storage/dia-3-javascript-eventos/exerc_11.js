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

Exercício 11 - Bônus:

Vamos adicionar compromissos ao seu calendário? Implemente
uma função que, ao digitar um compromisso na caixa de texto 
"COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" 
ao clicar no botão "ADICIONAR".

Se nenhum caractere for inserido no campo input, a função 
deve retornar um alert com uma mensagem de erro ao clicar em 
"ADICIONAR".

Ao pressionar a tecla "enter" o evento também deverá ser 
disparado.

Dica - Propriedade: key .

*/