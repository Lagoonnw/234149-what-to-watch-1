import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from './movie-card.jsx';

describe(`MovieCard render`, () => {
  test(`Should render movie card`, () => {
    const mock = {
      name: `Need Mass Effect movie`,
      imgSrc: ``,
      onMouseEnter: jest.fn(),
      onClick: jest.fn()
    };
    const tree = renderer.create(<MovieCard {...mock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
