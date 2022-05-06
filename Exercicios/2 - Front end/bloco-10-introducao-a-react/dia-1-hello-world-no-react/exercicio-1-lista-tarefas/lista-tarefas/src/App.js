import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['cinema no sabado', 'igreja no domingo', 'projeto na segunda', ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
      <h1>Lista de Tarefas</h1>
        {Task('Fazer exercicios do dia')}
        {Task('Preencher Matriz de Carreira')}
        {Task('Participar da mentoria')}
      <h2>LIsta de Compromissos</h2>
      
      {compromissos.map((compromisso) => <ul>{Task(compromisso)}</ul> )}
      </main>
    </div>
  );
}

export default App;
