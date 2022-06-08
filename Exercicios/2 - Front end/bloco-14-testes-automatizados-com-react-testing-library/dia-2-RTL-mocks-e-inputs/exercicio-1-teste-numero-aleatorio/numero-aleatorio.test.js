const getFunc = require('./numero-aleatorio')
test('Verifica se retornaUmNumeroAleatorio foi chamada', () => {
  retornaUmNumeroAleatorio()
  expect(retornaUmNumeroAleatorio).toHaveBeenCalled()
  // expect(retornaU)
}) 