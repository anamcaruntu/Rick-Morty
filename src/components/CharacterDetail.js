import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/App.scss';

const CharacterDetail = (props) => {
  return (
    <div className='background'>
      <Link to='/'>
        <button className='btn'>Volver al listado</button>
      </Link>
      <div className='cards'>
        <div className='card_detail'>
          <img
            className='card_img'
            src={props.character.image}
            alt={props.character.name}
          />
          <section>
            <header className='card__header'>
              <h2 className='card__title'>{props.character.name}</h2>
              <span className='button'></span>
            </header>
            <ul>
              <li>Especie:{props.character.specie}</li>
              <li>Planeta de origen:{props.character.planet}</li>
              <li>Aparece en: {props.character.episodes.length} episodios</li>
              <li>Estatus: {props.character.status}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
