import React from 'react';
import {shallow} from 'enzyme';
import {MainScreen} from "./main-screen";

const moviesList = [`Fantastic Beasts`];

describe(`Small movie card click`, () => {
  test(`Should call clickHandler on a card header click`, () => {
    const clickHandler = jest.fn();
    const component = shallow(<MainScreen moviesList={moviesList} onMovieCardClick={clickHandler}/>);
    const movieCardHeader = component.find(`.small-movie-card__title`);
    movieCardHeader.simulate(`click`);
    expect(clickHandler).toHaveBeenCalled();
  });
});
