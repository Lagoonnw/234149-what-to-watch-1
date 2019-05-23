import React from 'react';
import {shallow} from 'enzyme';
import {genresList} from '../../constants/constants';
import {MoviesFilter} from './movies-filter.jsx';

const mockFunc = jest.fn();
let component;
describe(`Movies-filter e2e test`, () => {
  beforeEach(() => {
    component = shallow(
        <MoviesFilter
          genresList={Array.from(genresList)}
          sortMovies={mockFunc}
          resetMovies={mockFunc}
          onClick={mockFunc}
        />
    );
  });

  test(`Should call resetMovies`, () => {
    const genres = component.find(`.catalog__genres-list`).children();
    genres.first().simulate(`click`, {
      preventDefault: jest.fn()
    });
    expect(mockFunc).toHaveBeenCalled();
  });

  test(`Should call sortMovies onClick`, () => {
    const genres = component.find(`.catalog__genres-list`).children();
    genres.last().simulate(`click`, {
      preventDefault: jest.fn()
    });
    expect(mockFunc).toHaveBeenCalled();
  });
});
