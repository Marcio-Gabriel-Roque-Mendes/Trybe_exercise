const valor1 = -42
const valor2 = 79
const valor3 = 59

function verificandoSeETriangulo (val1, val2, val3){
  if (val1 + val2 + val3 === 180){
    return `Esses valores formam um triângulo!!! :)`
  } else {
    return `Esses valores NÃO formam um triângulo`
  }
}

console.log(verificandoSeETriangulo(valor1,valor2,valor3))