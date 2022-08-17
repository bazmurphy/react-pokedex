import React from "react";
import "./App.css";
// import PokedexButtons from "./PokedexButtons";
import Logo from "./Logo";
import Description from "./Description";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";

function App() {

  const abilities = ["Confuse Ray", "Lick", "Night Shade", "Hypnosis"];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    // console.log("I have been clicked");
    alert("I have been clicked");
  };

  return (
    <div className="App">
      {/* <PokedexButtons /> */}
      <Logo appName="Pokedex" logWhenClicked={logWhenClicked}/>
      <Description />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      {/* <PokemonMoves /> */}
      <PokemonMovesSelector />
    </div>
  );
}

export default App;