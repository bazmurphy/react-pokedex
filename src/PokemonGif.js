import React from "react";

const PokemonGif = () => {

    const [imageSource, setImageSource] = React.useState("../gengar01.gif");
    const [gifNumber, setGifNumber] = React.useState(1);

    const changeImageSource = () => {
        setImageSource((prevImageSource) => {
            if (prevImageSource === "../gengar01.gif") {
                setGifNumber(2);
                return "../gengar02.gif";
            } else if (prevImageSource === "../gengar02.gif") {
                setGifNumber(3);
                return "../gengar03.gif";
            } else {
                setGifNumber(1);
                return "../gengar01.gif";
            }
        });
    };

    return (
        <div className="pokemon-gif-container">
            <p className="pokemon-gif-text">Gif {gifNumber} of 3</p>
            <img className="pokemon-gif-image" src={imageSource} onClick={changeImageSource} alt="animated gif of gengar" />
        </div>
    );
};

export default PokemonGif;