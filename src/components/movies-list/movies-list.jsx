import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from "../movie-card/movie-card.jsx";

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieCard: null
    };
    this._handleMouseEvents = this._handleMouseEvents.bind(this);
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
    const mouseEnterHandler = () => this._mouseEnterHandler(movie);
    return (
      <div className="catalog__movies-card__wrapper" key={`movie-${movie.name}`} onMouseEnter={mouseEnterHandler}>
        <MovieCard onClick={this._handleMouseEvents} {...movie} />
      </div>
    );
  }

  _handleMouseEvents(activeMovieCard) {
    this.setState({activeMovieCard});
  }

  _mouseEnterHandler(activeMovieCard) {
    this.setState({activeMovieCard});
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }))
};

