const calculationBMI = require('./bmi')
const readLine = require('readline-sync')

console.log('What\' your weight?');
const weight = readLine.questionFloat('enter here: ')
console.log('What\' your height?');
const height = readLine.questionFloat('enter here: ')

calculationBMI.imc(weight, height)
const bmi = (weight / (height * height)).toFixed(1);

if (bmi < 18.5) {
    console.log('According to your BMI you are "Underweight (Thin)"');
}

if(bmi >= 18.5 && bmi < 25.0){
    console.log('According to your BMI you are at "Normal Weight"');
}

if(bmi >= 25.0 && bmi < 30.0){
    console.log('According to your BMI you are at "Overweight (overweight)"');
}

if(bmi >= 30.0 && bmi < 35.0){
    console.log('According to your BMI you are at "Obesity (grade I)"');
}

if (bmi >= 35.0 && bmi < 40){
    console.log('According to your BMI you are at "Obesity (grade II)"');
}

if (bmi >= 40.0){
    console.log('According to your BMI you are at "Obesity (grade III and grade IV)"');
}
