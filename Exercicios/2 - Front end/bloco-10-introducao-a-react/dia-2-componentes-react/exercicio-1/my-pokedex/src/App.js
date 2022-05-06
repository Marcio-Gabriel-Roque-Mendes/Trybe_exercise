import React, { Component } from "react";
import Card from "./Card";
import pokemons from "./data";
import './App.css';


class App extends Component{
  render(){
    return(
     <main>
       <div>
         <section className="pokemon">
           {
             pokemons.map(pokemon =>{
              return <Card cardInfo={pokemon} />
             })
           }
         </section>
       </div>
     </main>
    )
  }
}

export default App;

// nome, tipo, peso e unidade de medida usada, imagem