import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = (props) => {
  const {name, imgSrc, onClick} = props;
  const clickHandler = () => onClick({name, imgSrc});

  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button" onClick={clickHandler}>Play</button>
      <div className="small-movie-card__image">
        <img src={imgSrc} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
