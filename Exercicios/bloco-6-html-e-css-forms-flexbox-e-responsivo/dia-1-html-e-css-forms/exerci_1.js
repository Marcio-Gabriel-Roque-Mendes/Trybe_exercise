const botaoUm = document.querySelector('#botao1')

function pararSubmit(submit) {
  submit.preventDefault()
}

botaoUm.addEventListener('click', pararSubmit)