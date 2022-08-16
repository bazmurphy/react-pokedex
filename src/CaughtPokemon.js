import React from "react";

const CaughtPokemon = (props) => {

    // const date = new Date().toLocaleDateString()

    // console.log(`CaughtPokemon Component Props: ${props}`);

    const [caught, setCaught] = React.useState(0);

    function catchPokemon() {
        setCaught((prevCaught) => prevCaught + 1);
    }

    return (
        <div className="caught-pokemon-container">
            <p className="caught-pokemon-text">Caught {caught} POKéMON on {props.date}</p>
            <button onClick={catchPokemon} className="caught-pokemon-button">I caught a POKéMON !</button>
        </div>
    );
};

export default CaughtPokemon;