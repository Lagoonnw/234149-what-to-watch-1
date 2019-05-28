import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from '../../actions/data/action';
import {genresList as genres} from '../../constants/constants';
import {getGenres} from "../../reducers/data/selectors";

export const MoviesFilter = (props) => {
  const {genresList, sortMovies, resetMovies, onClick, activeItem = null} = props;
  const _resetMovies = (evt) => {
    evt.preventDefault();
    onClick(null);
    resetMovies();
  };

  return (
    <ul className="catalog__genres-list">
      <li
        onClick={_resetMovies}
        className={`catalog__genres-item ${(activeItem === null) ? `catalog__genres-item--active` : ``}`}
        key={`All genres`}
      >
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {genresList.map((genre) => {
        const onGenreClick = (evt) => {
          evt.preventDefault();
          sortMovies(genre);
          onClick(genre);
        };

        return (
          <li
            onClick={onGenreClick}
            className={`catalog__genres-item ${(genre === activeItem) ? `catalog__genres-item--active` : ``}`}
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
  sortMovies: PropTypes.func.isRequired,
  resetMovies: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genresList: getGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  sortMovies: (activeFilter) => dispatch(ActionCreator.sortMovies(activeFilter)),
  resetMovies: () => dispatch(ActionCreator.resetMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFilter);


