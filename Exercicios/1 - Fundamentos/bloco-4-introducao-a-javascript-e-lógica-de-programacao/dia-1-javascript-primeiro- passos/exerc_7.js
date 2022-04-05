// MODELO ENGESSADO COM SWITCH CASE

// let nota = 60;
// let porcentagem = (nota / 100) * 100;
// let simbolo = `${porcentagem}%`;

// switch (simbolo) {
//   case "90%":
//     console.log("Nota A");
//     break;

//   case "80%":
//     console.log("Nota B");
//     break;

//   case "70%":
//     console.log("Nota C");
//     break;

//   case "60%":
//     console.log("Nota D");
//     break;

//   case "50%":
//     console.log("Nota E");
//     break;

//   default:
//     console.log("Nota F");
//     break;
// }

let nota = 950
let porcentagem = (nota/1000) * 100
let simbolo =  `${porcentagem}%`
console.log(simbolo);

  if (porcentagem < 0 || porcentagem > 100) {
    console.log('!ERRO');

  } else if (porcentagem >= 90) {
    console.log('Nota A');

  } else if (porcentagem >= 80) {
    console.log('Nota B')

  } else if (porcentagem >= 70) {
    console.log('Nota C')

  } else if (porcentagem >= 60) {
    console.log('Nota D')

  } else if (porcentagem >= 50) {
    console.log('Nota E')

  } else if (porcentagem < 50){
    console.log('Nota F')
  } 