import React from "react";

// function BestPokemon() {
//   return (
//     <p>My favourite Pokemon is Pikachu</p>
//   )
// }

const BestPokemon = (props) => {

  // const abilities = ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'];

  // console.log(`BestPokemon Component Props: ${props}`);

  return (
    <div className="best-pokemon-container">
      <p className="favourite-pokemon">My favourite POKéMON is Gengar</p>
      <p className="abilities">Abilities:</p>
        <ul className="abilities-list">
        { props.abilities.map((element, index) => <li key={index}>{element}</li>) }
      </ul>
    </div>
  );
};

export default BestPokemon;