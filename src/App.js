import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {

  const abilities = ["Confuse Ray", "Lick", "Night Shade", "Hypnosis"];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    // console.log("I have been clicked");
    alert("Gengar Gengar Gengar!");
  };

  return (
    <div className="App">
      <Logo appName="Pokedex" logWhenClicked={logWhenClicked}/>
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      {/* <PokemonMoves /> */}
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;