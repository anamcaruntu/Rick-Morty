import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import Header from "./Header.js";
import CharacterList from "./CharacterList.js";
import Search from "./Search.js";
import CharacterDetail from "./CharacterDetail";
import getDataFromApi from "../services/getDataFromApi.js";
import CharacterInexistent from "./CharacterInexistent.js";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setName] = useState("");
  const [typeFilter, setFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data, id) => {
    if (id === "name") {
      setName(data);
    } else {
      setFilter(data);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      return character.type.toUpperCase().includes(typeFilter.toUpperCase());
    });

  const renderCharacterDetail = (props) => {
    const characterName = props.match.params.characterName;
    const clickedCharacter = characters.find((character) => {
      return character.name === characterName;
    });

    if (clickedCharacter !== undefined) {
      return <CharacterDetail character={clickedCharacter} />;
    } else {
      return <CharacterInexistent />;
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Search handleFilter={handleFilter} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route
          exact
          path="/character/:characterName"
          render={renderCharacterDetail}
        />
      </Switch>
    </div>
  );
};

export default App;
