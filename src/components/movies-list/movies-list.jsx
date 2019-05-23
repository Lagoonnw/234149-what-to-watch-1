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
    const {onClick, activeItem, onMouseEnter, onMouseLeave} = this.props;
    const isPlaying = movie.id === activeItem;
    const _onMouseEnter = () => onMouseEnter(movie.id, VIDEO_PLAY_DELAY_TIME);

    return (
      <MovieCard
        key={movie.id}
        isPlaying={isPlaying}
        onMouseLeave={onMouseLeave}
        onMouseEnter={_onMouseEnter}
        onClick={onClick}
        {...movie}
      />
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })),
  setMovies: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

MoviesList.defaultProps = {
  activeItem: null
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: filterMovies(state.movies, GenreMap[state.activeGenre])
});

const mapDispatchToProps = (dispatch) => ({
  setMovies: () => dispatch(ActionCreator.setMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

