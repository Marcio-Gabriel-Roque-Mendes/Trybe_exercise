let situacao = 'lol'

switch(situacao) {
  case 'aprovado':
    console.log('Parabéns, você agora é um(a) tryber')
    break;

  case 'lista':
    console.log('Você está na lista de espera')
    break;

  case 'reprovado':
    console.log('Você não foi aprovado, tente novamente, resiliência é uma caracteristica admirada na Trybe')
    break;

  default:
    console.log('não se aplica' )
}