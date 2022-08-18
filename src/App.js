import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import PokemonGif from "./PokemonGif";

function App() {

  const abilities = ["Confuse Ray", "Lick", "Night Shade", "Hypnosis"];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    // console.log("I have been clicked");
    alert("Gengar Gengar Gengar!");
  };

  return (
    <div className="pokedex-container">
      <div className="pokedex-decoration">
        <img className="pokedex-decoration-image" src="../pokedex-buttons.png" alt="pokedex buttons" />
      </div>
      <div className="App">
        <Logo appName="Pokedex" logWhenClicked={logWhenClicked}/>
        <BestPokemon abilities={abilities} />
        <CaughtPokemon date={date} />
        {/* <PokemonMoves /> */}
        <PokemonMovesSelector />
        <PokemonCity />
        <PokemonGif />
        </div>
    </div>
  );
}

export default App;