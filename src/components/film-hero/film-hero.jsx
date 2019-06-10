import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import {Link} from 'react-router-dom';

export const FilmHero = ({backgroundImage, name, genre, released, id, onPlayClick, saveMovieToFavorite, history}) => {
  const onClick = () => onPlayClick(id);
  const onAddBtnClick = () => {
    saveMovieToFavorite(id);
    history.push(`/myList`);
  };


  return (
    <div className="movie-card__hero" >
      <div className="movie-card__bg">
        <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />
      <div className="movie-card__wrap" >
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button" onClick={onClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button" onClick={onAddBtnClick}>
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            <Link to={`/film/${id}/review`} className="btn movie-card__button">Add review</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FilmHero.propTypes = {
  id: PropTypes.number.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  saveMovieToFavorite: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
