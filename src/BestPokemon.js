import React from "react";

const BestPokemon = (props) => {

  // const abilities = ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'];

  // console.log(`BestPokemon Component Props: ${props}`);

  return (
    <div className="best-pokemon-container">
      <p className="best-pokemon-heading">My favourite POKéMON is <span>Gengar</span></p>
      <p className="best-pokemon-description">Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.</p>
      <p className="best-pokemon-abilities-heading">Abilities:</p>
        <ul className="best-pokemon-abilities-list">
        { props.abilities.map((element, index) => <li key={index}>{element}</li>) }
      </ul>
    </div>
  );
};

export default BestPokemon;