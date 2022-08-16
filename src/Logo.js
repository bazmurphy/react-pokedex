import React from "react";

// function Logo() {
//   return (
//     <header>
//       <h1>Welcome to the Pokedex</h1>
//       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pidgey" />
//     </header>
//   );
// }

const Logo = (props) => {

    // const appName = "Pokedex"

    // console.log(`Logo Component Props: ${props}`);

    // const logWhenClicked = () => {
    //   console.log("I have been clicked");
    // };

    return (
      <header className="logo-container">
        <h1>Welcome to Baz's {props.appName}</h1>
        <img onClick={props.logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" alt="Gengar"/>
      </header>
    );
};

export default Logo;