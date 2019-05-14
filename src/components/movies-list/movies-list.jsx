import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from "../movie-card/movie-card.jsx";
import {VIDEO_PLAY_DELAY_TIME} from "../../constants/constants";

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieCard: null
    };
    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
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
    const isPlaying = Boolean(movie.id === this.state.activeMovieCard);

    return (
      <MovieCard
        key={movie.id}
        isPlaying={isPlaying}
        onMouseLeave={this._mouseLeaveHandler}
        onMouseEnter={this._mouseEnterHandler}
        {...movie}
      />
    );
  }

  _mouseEnterHandler(activeMovieCard) {
    setTimeout(() => this.setState({activeMovieCard}), VIDEO_PLAY_DELAY_TIME);
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

