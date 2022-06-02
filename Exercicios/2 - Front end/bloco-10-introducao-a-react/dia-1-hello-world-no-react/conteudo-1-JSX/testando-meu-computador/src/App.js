import React from 'react'
import './App.css';
const textJSX = "Hello, JSX";

class App extends React.Component{
  render() {
    return (<h1>{textJSX}</h1>);
  }
}

export default App;
