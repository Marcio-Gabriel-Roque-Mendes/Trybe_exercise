const { test, expect } = require('@jest/globals')
const retornaUmNumeroAleatorio = () => {
  return Math.floor(Math.random()*101)
}
console.log(retornaUmNumeroAleatorio());

module.exports = { retornaUmNumeroAleatorio }