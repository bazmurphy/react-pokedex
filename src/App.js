import React from "react";
import "./App.css";
import Logo from "./Logo";
import Description from "./Description";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {

  const abilities = ["Confuse Ray", "Lick", "Night Shade", "Hypnosis"];
  const date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Logo appName="Pokedex" />
      <Description />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;