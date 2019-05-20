import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MovieCard} from '../movie-card/movie-card.jsx';
import {GenreMap, VIDEO_PLAY_DELAY_TIME} from '../../constants/constants';
import {connect} from 'react-redux';
import {ActionCreator} from '../../action';
import {filterMovies} from '../../helpers/filterMovies';

export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    props.setMovies();
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
    const isPlaying = movie.id === this.state.activeMovieCard;

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
    poster: PropTypes.string.isRequired
  })),
  setMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: filterMovies(state.movies, GenreMap[state.activeGenre])
});

const mapDispatchToProps = (dispatch) => ({
  setMovies: () => dispatch(ActionCreator.setMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

