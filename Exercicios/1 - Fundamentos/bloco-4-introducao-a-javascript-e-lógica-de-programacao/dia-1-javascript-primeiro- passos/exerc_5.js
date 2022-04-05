const a = 99 
const b = 20 
const c = 100

if (a < 0 || b < 0 || c < 0){
  console.log(`${false} não é um triangulo`);
} else if (a + b + c == 180){
  console.log(true + ' é um triangulo');
} else if (a + b + c !== 180){
  console.log('Invalido, não tem as medidas de um triangulo');
}

