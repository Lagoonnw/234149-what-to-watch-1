import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from "../movie-card/movie-card.jsx";

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieCard: null
    };
  }

  render() {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => this._getMovie(movie))}
      </div>
    );
  }

  _getMovie(movie) {
    const mouseEnterHandler = () => this._mouseEnterHandler(movie.id);
    const mouseLeaveHandler = () => this._mouseLeaveHandler();
    const isPlaying = Boolean(movie.id === this.state.activeMovieCard);
    return (
      <div
        className="catalog__movies-card__wrapper"
        key={movie.id}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <MovieCard isPlaying={isPlaying} {...movie} />
      </div>
    );
  }

  _mouseEnterHandler(activeMovieCard) {
    setTimeout(() => this.setState({activeMovieCard}), 1000);
  }

  _mouseLeaveHandler() {
    this.setState({activeMovieCard: null});
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }))
};

