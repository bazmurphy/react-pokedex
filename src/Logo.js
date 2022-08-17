import React from "react";

const Logo = (props) => {

    // const appName = "Pokedex"

    // console.log(`Logo Component Props: ${props}`);

    // const logWhenClicked = () => {
    //   console.log("I have been clicked");
    // };

    return (
      <header className="logo-container">
        <h1 className="logo-heading">Welcome to Baz's {props.appName}</h1>
        <img className="logo-image" onClick={props.logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" alt="Gengar"/>
      </header>
    );
};

export default Logo;