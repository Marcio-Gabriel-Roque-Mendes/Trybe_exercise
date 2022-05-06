import './App.css';
import staringCat from './staringCat.jpg'
import Image from './Image.js';

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText='Cute cat staring'/>
    </main>
    );
}

export default App;
