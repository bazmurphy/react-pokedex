import React from "react";

const CaughtPokemon = (props) => {

    // const date = new Date().toLocaleDateString()

    // console.log(`CaughtPokemon Component Props: ${props}`);

    // const [caught, setCaught] = React.useState(0);

    const [caught, setCaught] = React.useState([]);

    const [pokemonNameInput, setPokemonNameInput] = React.useState("");

    // const pokemonList = ["Caterpie", "Metapod", "Weedle", "Kakuna", "Rattata", "Pidgey", "Spearow", "Ekans", "Sandshrew", "Nidoran♀", "Nidoran♂"];
    // const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];

    const catchPokemon = () => {
        // setCaught((prevCaught) => prevCaught + 1);
        // setCaught(caught.concat(randomPokemon));
        if (pokemonNameInput !== "") {
            setCaught(caught.concat(pokemonNameInput));
            setPokemonNameInput("");
        }
    };

    const handleInputChange = (event) => {
        setPokemonNameInput(event.target.value);
    };

    return (
        <div className="caught-pokemon-container">
            <p className="caught-pokemon-info">Caught {caught.length} POKéMON on {props.date}</p>
            <input
                type="text"
                value={pokemonNameInput}
                onChange={handleInputChange}
                placeholder="Enter a POKéMON"
                className="caught-pokemon-input"
            />
            <button onClick={catchPokemon} className="caught-pokemon-button">I caught a POKéMON !</button>
            <p className="caught-pokemon-list-heading">POKéMON Caught:</p>
            <ul className="caught-pokemon-list">
                {caught.map((element, index) => <li key={index} className="caught-pokemon-list-item">{element}</li>)}
            </ul>
        </div>
    );
};

export default CaughtPokemon;