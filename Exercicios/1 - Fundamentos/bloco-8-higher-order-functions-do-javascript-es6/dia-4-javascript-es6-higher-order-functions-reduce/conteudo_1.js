const numbers = [50, 85, -30, 3, 15];

const getBigger = (result, number) => {
  // console.log(result);
  return result + number
}

const somaNumeros = numbers.reduce(getBigger)
console.log(somaNumeros);