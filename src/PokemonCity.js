import React from "react";

const PokemonCity = () => {
  const [city, setCity] = React.useState("");

  const updateCity = (event) => {
    // console.log(event.target.value)
    setCity(event.target.value);
  };

  return (
    <div className="pokemon-city-container">
      <input
      type="text"
      value={city}
      onChange={updateCity}
      className="pokemon-city-input"
      placeholder="Enter a location"
      />
      {city && <p className="pokemon-city-text">Welcome to <span>{city}!</span></p>}
    </div>
  );
};

export default PokemonCity;
