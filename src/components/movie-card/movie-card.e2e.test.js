import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from "./movie-card";

describe(`MovieCard mouse events test`, () => {
  test(`Should call onMouseEnter`, () => {
    const movieMock = {
      id: 45465454,
      genre: `horror`,
      name: `Avengers`,
      poster: `pic.jpg`,
      src: `video.mp4`,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onClick: jest.fn()
    };
    const component = shallow(<MovieCard {...movieMock}/>);
    const card = component.find(`.small-movie-card`);
    card.simulate(`mouseenter`);

    expect(movieMock.onMouseEnter).toHaveBeenCalled();
  });

  test(`Should call onMouseLeave`, () => {
    const movieMock = {
      id: 45465454,
      name: `Avengers`,
      genre: `horror`,
      poster: `pic.jpg`,
      src: `video.mp4`,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onClick: jest.fn()
    };
    const component = shallow(<MovieCard {...movieMock}/>);
    const card = component.find(`.small-movie-card`);
    card.simulate(`mouseleave`);

    expect(movieMock.onMouseLeave).toHaveBeenCalled();
  });
});
