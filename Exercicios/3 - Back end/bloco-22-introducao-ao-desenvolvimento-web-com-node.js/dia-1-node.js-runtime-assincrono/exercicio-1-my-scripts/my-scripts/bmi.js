const imc = (weight, height) => console.log(`O seu IMC é ${(weight / (height * height)).toFixed(1)}`)

// imc(101.1, 1.70)

module.exports = {
    imc
}