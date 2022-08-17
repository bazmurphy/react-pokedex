import React from "react";

import PokemonMoves from "./PokemonMoves";

const PokemonMovesSelector = () => {
  const [id, setId] = React.useState(null);

  const handleGastlyClick = () => setId(92);
  const handleHaunterClick = () => setId(93);
  const handleGengarClick = () => setId(94);

  return (
    <div className="pokemon-moves-selector-container">
        <button onClick={handleGastlyClick} className="pokemon-moves-selector-button">Gastly</button>
        <button onClick={handleHaunterClick} className="pokemon-moves-selector-button">Haunter</button>
        <button onClick={handleGengarClick} className="pokemon-moves-selector-button">Gengar</button>
        {id ? <PokemonMoves pokemonId={id} /> : null}
    </div>
  );
}

export default PokemonMovesSelector;