import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from '../../action';
import {genresList as genres} from '../../constants/constants';

export const MoviesFilter = (props) => {
  const {genresList, activeGenre, sortMovies, resetMovies} = props;
  const _resetMovies = (evt) => {
    evt.preventDefault();
    resetMovies();
  };

  return (
    <ul className="catalog__genres-list">
      <li
        onClick={_resetMovies}
        className={`catalog__genres-item ${(activeGenre === null) ? `catalog__genres-item--active` : ``}`}
        key={`All genres`}
      >
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {genresList.map((genre) => {
        const onGenreClick = (evt) => {
          evt.preventDefault();
          sortMovies(genre);
        };

        return (
          <li
            onClick={onGenreClick}
            className={`catalog__genres-item ${(genre === activeGenre) ? `catalog__genres-item--active` : ``}`}
            key={genre}
          >
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

MoviesFilter.propTypes = {
  genresList: PropTypes.arrayOf(PropTypes.oneOf(Array.from(genres))).isRequired,
  activeGenre: PropTypes.string,
  sortMovies: PropTypes.func.isRequired,
  resetMovies: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeGenre: state.activeGenre,
  genresList: state.genres
});

const mapDispatchToProps = (dispatch) => ({
  sortMovies: (activeFilter) => dispatch(ActionCreator.sortMovies(activeFilter)),
  resetMovies: () => dispatch(ActionCreator.resetMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFilter);


