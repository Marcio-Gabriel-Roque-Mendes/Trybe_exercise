const botaoUm = document.querySelector('#botao2')

function pararSubmit(submit) {
  submit.preventDefault()
}

botao2.addEventListener('click', pararSubmit)