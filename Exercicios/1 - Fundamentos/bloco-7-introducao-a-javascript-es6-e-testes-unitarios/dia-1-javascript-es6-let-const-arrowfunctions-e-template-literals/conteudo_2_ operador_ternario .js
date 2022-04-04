 /*O operador ternário permite fazer operações 
 condicionais mais simples, que só tenham duas 
 possibilidades de resposta ( x se verdadeiro , y se 
  falso ), com uma sintaxe simplificada e legível, 
  funciona muito bem com as sintaxes simplificadas que 
  você acabou de aprender, como arrow functions , por 
  exemplo! Para entendê-lo melhor, observe a seguinte 
  lógica:*/

  // A sintaxe básica do operador ternário é muito 
  // simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : 
`retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a 
// seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira