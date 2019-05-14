import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from "./movie-card";

describe(`MovieCard mouse events test`, () => {
  test(`Should call onMouseEnter`, () => {
    const movieMock = {
      id: 45465454,
      name: `Avengers`,
      imgSrc: `pic.jpg`,
      src: `video.mp4`,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn()
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
      imgSrc: ``,
      src: ``,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn()
    };
    const component = shallow(<MovieCard {...movieMock}/>);
    const card = component.find(`.small-movie-card`);
    card.simulate(`mouseleave`);

    expect(movieMock.onMouseLeave).toHaveBeenCalled();
  });
});
