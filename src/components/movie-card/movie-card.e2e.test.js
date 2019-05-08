import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from "./movie-card";

describe(`MovieCard clickEvent test`, () => {
  test(`Should return correct MovieCard in clickHandler`, () => {
    const movieMock = {
      id: 45465454,
      name: `Avengers`,
      imgSrc: ``
    };
    const mock = Object.assign(movieMock, {
      onMouseEnter: jest.fn(),
      onClick: jest.fn(() => movieMock.id)
    });
    const component = shallow(<MovieCard {...mock}/>);
    const card = component.find(`.small-movie-card`);
    card.simulate(`mouseenter`);
    card.find(`.small-movie-card__play-btn`).simulate(`click`);
    expect(mock.onClick).toHaveReturnedWith(movieMock.id);
  });
});
