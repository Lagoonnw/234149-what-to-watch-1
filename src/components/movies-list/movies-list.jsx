import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from '../movie-card/movie-card.jsx';
import {VIDEO_PLAY_DELAY_TIME} from '../../constants/constants';

export const MoviesList = (props) => {
  const {
    movies,
    onClick,
    activeItem,
    onMouseEnter,
    onMouseLeave,
    onShowMoreBtnClick,
    shouldShowBtn
  } = props;

  const _getMovie = (movie) => {
    const {
      previewImage,
      previewVideoLink,
      genre,
      id,
      name
    } = movie;
    const isPlaying = movie.id === activeItem;
    const _onMouseEnter = () => onMouseEnter(movie.id, VIDEO_PLAY_DELAY_TIME);

    return (
      <MovieCard
        key={movie.id}
        id={id}
        name={name}
        isPlaying={isPlaying}
        onMouseLeave={onMouseLeave}
        onMouseEnter={_onMouseEnter}
        onClick={onClick}
        poster={previewImage}
        src={previewVideoLink}
        genre={genre}
      />
    );
  };

  return (
    <Fragment>
      <div className="catalog__movies-list">
        {movies.map((movie) => _getMovie(movie))}
      </div>
      {shouldShowBtn && <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onShowMoreBtnClick}>Show more</button>
      </div>}
    </Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  shouldShowBtn: PropTypes.bool,
  onShowMoreBtnClick: PropTypes.func
};

MoviesList.defaultProps = {
  activeItem: null,
  shouldShowBtn: false
};
