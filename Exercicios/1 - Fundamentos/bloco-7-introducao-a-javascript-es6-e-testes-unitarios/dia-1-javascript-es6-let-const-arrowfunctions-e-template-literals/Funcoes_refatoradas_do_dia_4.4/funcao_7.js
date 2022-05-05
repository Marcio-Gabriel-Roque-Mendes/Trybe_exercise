const verificandoSeETriangulo = (val1, val2, val3) => {
  return val1 + val2 + val3 === 180 ? `Esses valores formam um triângulo!!! :)` : `Esses valores NÃO formam um triângulo`
}
const valor1 = -42
const valor2 = 79
const valor3 = 59

console.log(verificandoSeETriangulo(valor1,valor2,valor3))