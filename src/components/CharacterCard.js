import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

function CharacterCard(props) {
  return (
    <li className='card'>
      <Link to={`/character/${props.character.name}`}>
        <img
          className='card__img'
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
        />
        <h4 className='card__title'>{props.character.name}</h4>
        <p className='card__description'>{props.character.specie}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
