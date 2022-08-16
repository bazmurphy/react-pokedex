import React from "react";

const CaughtPokemon = (props) => {
    // const date = new Date().toLocaleDateString()

    console.log(`CaughtPokemon Component Props: ${props}`);

    return (
        <div>
            <p>Caught 0 Pokemon on {props.date}</p>
        </div>
    );
};

export default CaughtPokemon;