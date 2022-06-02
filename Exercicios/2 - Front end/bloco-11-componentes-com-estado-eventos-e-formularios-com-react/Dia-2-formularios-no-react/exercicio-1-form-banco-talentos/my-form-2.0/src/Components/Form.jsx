import React, { Component } from 'react';

const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 
  'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão',
  'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais',
  'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 
  'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul',
  'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo',
  'Sergipe', 'Tocantins', 'Distrito Federal']

class Form extends Component {
  state = {
    nome: '', /*Texto*/
    email: '', /*Texto*/
    cpf: '', /*Texto*/
    endereco: '', /*Texto*/
    cidade: '', /*Texto*/
    estado: 0, /*ComboBox*/
    tipo: 0, /*ComboBox*/
    curriculo: '', /*TextArea*/
    cargo: '', /*TextArea*/
    descricao: '', /*TextArea*/
  }

  handleFunction() {

  }

  render() {

    const { nome, email, cpf, endereco, cidade, estado, tipo, curriculo, cargo, descricao } = this.state

    return (
      <div>
        <h1>Cadastre-se no nosso banco de talentos:</h1>
        <form className='form'>
          <fieldset>
            <legend>Informações pessoais</legend>

            <label htmlFor="nome">
              Nome:
              <input
                id='nome'
                name='nome'
                type="text"
                maxLength={40} />
            </label>
            <br />
            <label htmlFor="email">
              Email:
              <input
                id='email'
                name='email'
                type="text"
                maxLength={50} />
            </label>
            <br />
            <label htmlFor="cpf">
              CPF:
              <input
                id='cpf'
                name='cpf'
                type="text"
                maxLength={11} />
            </label>
            <br />
            <label htmlFor="endereco">
              Endereco:
              <input
                id='endereco'
                name='endereco'
                type="text"
                maxLength={200} />
            </label>
            <br />
            <label htmlFor="cidade">
              Cidade:
              <input
                id='cidade'
                name='cidade'
                type="text"
                maxLength={28} />
            </label>
            <br />
            <label htmlFor="estado">
              Estado:
              <select
                id='estado'
                name='estado'
              >
                <option value=''>selecione</option>
                {
                  estados.map((value, key) => (
                    <option key={ key }>{ value }</option>
                  ))
                }
              
              </select>

            </label>
            <br />
            <label htmlFor="tipo">
              Tipo de moradia:
              <radio
                id='tipo'
                name='tipo'>
                Casa, Apartamento
              </radio>
            </label>

          </fieldset>

          <fieldset>
            <legend>Informações do seu último emprego:</legend>

            <textarea name="textarea" id="textarea" cols="30" maxlength="1000" rows="10"></textarea>

          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;