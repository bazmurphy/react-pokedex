import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Info from "./Info"

function App() {

  const abilities = ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'];
  const date = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <Info />
    </div>
  );
}

export default App;