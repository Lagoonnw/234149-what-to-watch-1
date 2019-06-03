import React from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from '../movie-card/movie-card.jsx';
import {VIDEO_PLAY_DELAY_TIME} from '../../constants/constants';

export const MoviesList = (props) => {
  const {
    movies,
    onClick,
    activeItem,
    onMouseEnter,
    onMouseLeave
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
    <div className="catalog__movies-list">
      {movies.map((movie) => _getMovie(movie))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

MoviesList.defaultProps = {
  activeItem: null
};
