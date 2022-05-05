test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});

/*
Deu errado esse teste não entendi muito bem o porquê me parece que era porque tinha que ter instalado 
o jest, que até onde eu sei já esta instalado, mas não sei se tenho que instalar toda vez igual ao npm.

Porém eu não fui atrás disso até porque a aula do dia 9.1 parece pela reação do a Atanes e os
comentários dos colegas de turma ser TOTALMENTE descartável 

*/