import React from "react";

// function BestPokemon() {
//   return (
//     <p>My favourite Pokemon is Pikachu</p>
//   )
// }

const BestPokemon = (props) => {

  // const abilities = ['Tackle', 'Sand Attack', 'Gust', 'Quick Attack'];

  console.log(`BestPokemon Component Props: ${props}`)

  return (
    <div>
      <p>My favourite Pokemon is Pidgey</p>
      <ul>
        {/* { abilities.map((element, index) => {
            return <li key={index}>{element}</li>
          })
        } */}
        { props.abilities.map((element, index) => <li key={index}>{element}</li>) }
      </ul>
    </div>
  );
}

export default BestPokemon;