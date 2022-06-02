import React, {Component} from 'react';
import './App.css';
import staringCat from './staringCat.jpg'
import Image from './Image.js';

class App extends Component {
  render () {
    return (
      <main>
        <Image source={staringCat} alternativeText='Cute cat staring'/>
      </main>
      );
  }
}

export default App;
