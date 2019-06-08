import React from 'react';
import PropTypes from 'prop-types';
import {getMoreLikeThis} from '../../reducers/movies/selectors';
import {connect} from 'react-redux';
import {MovieCard} from '../movie-card/movie-card.jsx';

export const MoreLikeThis = ({movies = [], onMouseLeave, onMouseEnter, activeItem = null}) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => {
      const _onMouseEnter = () => onMouseEnter(movie.id);
      const isPlaying = movie.id === activeItem;
      return (
        <MovieCard
          key={`movie-${movie.id}`}
          onMouseLeave={onMouseLeave}
          onMouseEnter={_onMouseEnter}
          name={movie.name} src={movie.previewVideoLink}
          genre={movie.genre}
          id={movie.id}
          poster={movie.previewImage}
          isPlaying={isPlaying}
        />
      );
    }
    )}
  </div>
);

MoreLikeThis.propTypes = {
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
  })),
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  activeItem: PropTypes.number
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: getMoreLikeThis(state, ownProps.genre, ownProps.id)
});

export default connect(mapStateToProps, null)(MoreLikeThis);
