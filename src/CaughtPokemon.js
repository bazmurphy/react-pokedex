import React from "react";

const CaughtPokemon = (props) => {

    // const date = new Date().toLocaleDateString()

    // console.log(`CaughtPokemon Component Props: ${props}`);

    return (
        <div className="caught-pokemon-container">
            <p className="caught-pokemon">Caught 0 POKéMON on {props.date}</p>
        </div>
    );
};

export default CaughtPokemon;