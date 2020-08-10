import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

const CharacterInexistent = () => {
  return (
    <div>
      <Link to="/">
        <button className="btn">Vuelve al listado</button>
      </Link>
      <h1 className="label">No existe personaje con ese nombre</h1>
    </div>
  );
};

export default CharacterInexistent;
