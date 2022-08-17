import React from "react";

const PokemonMoves = (props) => {

  const [pokemonData, setPokemonData] = React.useState(null);

  React.useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}`)
          .then((res) => res.json())
          .then((data) => setPokemonData(data));
  }, [props.pokemonId]);

  return (
    <div className="pokemon-moves-container">
      {pokemonData ? (
          <div className="pokemon-moves-container">
            <img className="pokemon-moves-image" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p className="pokemon-moves-heading"><span>{pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}</span>'s Moves:</p>
            <ul className="pokemon-moves-list">
              { pokemonData.moves
                .filter((element) => element.version_group_details[0].move_learn_method.name === "level-up")
                // && element.version_group_details[0].version_group.name === "red-blue"
                .sort((a,b) => a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at)
                .map((element, index) => {
                  return (
                    <li key={index} className="pokemon-moves-list-item">{element.move.name}</li>
                  );
                })
              }
            </ul>
          </div>
        ) : null
      }
    </div>
  );
};

export default PokemonMoves;