import React from "react";
import "../stylesheets/App.scss";
import CharacterCard from "./CharacterCard.js";

const CharacterList = (props) => {
  const characterElement = props.characters.map((character, index) => {
    return <CharacterCard key={character.id} character={character} />;
  });
  return (
    <section>
      <ul className="cards">{characterElement}</ul>
    </section>
  );
};

export default CharacterList;
