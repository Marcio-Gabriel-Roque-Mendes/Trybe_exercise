import React, { Component } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import './App.css';

class App extends Component{
  render() {
    return(
      <div>
    <Header />
    <Content />
    <Footer />
  </div>
    )
  }
}

export default App;
