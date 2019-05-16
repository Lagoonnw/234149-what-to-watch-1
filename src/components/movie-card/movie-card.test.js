import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from './movie-card.jsx';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

describe(`MovieCard render`, () => {
  test(`Should render movie card`, () => {
    const options = {createNodeMock};
    const mock = {
      id: 54545454,
      name: `Need Mass Effect movie`,
      imgSrc: `pic.jpg`,
      src: `video.mp4`,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn()
    };
    const tree = renderer.create(<MovieCard {...mock}/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
