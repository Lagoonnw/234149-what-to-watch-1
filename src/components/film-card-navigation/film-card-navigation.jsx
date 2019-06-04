import React from 'react';
import PropTypes from 'prop-types';
import {FilmCardTab} from '../../constants/constants';

export const FilmCardNavigation = ({onClick, activeTab}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Object.values(FilmCardTab).map((value) => {
        const _onClick = () => onClick(value);
        return (
          <li
            className={`movie-nav__item ${(activeTab === value) ? `movie-nav__item--active` : ``}`}
            key={`tab-${value}`}
          >
            <a
              href="#"
              className="movie-nav__link"
              onClick={_onClick}
            >
              {value}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

FilmCardNavigation.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};
