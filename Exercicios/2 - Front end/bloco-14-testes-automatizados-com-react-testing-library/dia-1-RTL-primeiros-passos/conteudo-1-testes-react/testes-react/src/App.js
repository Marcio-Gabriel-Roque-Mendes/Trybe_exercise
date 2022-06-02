// App.js
import React, { Component } from 'react';
import './App.css';
import ValidEmail from  './ValidEmail'


export default class App extends Component{
  state = {
    email: '',
    saveEmail: '',
  };

  changeEmail = (value) => {
    this.setState({ email: value });
  }

  changeSaveEmail = (value) => {
    this.setState({ saveEmail: value, email: '' });
  }
  
  render(){
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input 
            id="id-email"
           value={ email }
           type="email" 
           onChange={ (evento) => this.changeEmail(evento.target.value) }/>
        </label>
        <input 
        id="btn-send" 
        type="button" 
        data-testid="id-send" 
        value="Enviar" 
        onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-back" type="button" value="Voltar" />
        {/* <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2> */}
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}
