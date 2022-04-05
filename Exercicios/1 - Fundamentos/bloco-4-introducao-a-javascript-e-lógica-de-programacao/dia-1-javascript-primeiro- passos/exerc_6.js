const torre = 'DIAGONAL'.toLowerCase()

if (torre == 'horizontal') {
  console.log(`Sua peça esta na ${torre}, mas também pode ir na vertical`);
} else if (torre == 'vertical') {
  console.log(`Sua peça esta na ${torre}, mas também pode ir na horizontal`);
} else {
  console.log('Movimento inválido');
}