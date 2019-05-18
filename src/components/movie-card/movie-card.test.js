import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from './movie-card.jsx';
import {createNodeMock} from '../../__mock__/createMockNode';

describe(`MovieCard render`, () => {
  test(`Should render movie card`, () => {
    const options = {createNodeMock};
    const mock = {
      id: 54545454,
      name: `Need Mass Effect movie`,
      genre: `sci-Fi`,
      poster: `pic.jpg`,
      src: `video.mp4`,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn()
    };
    const tree = renderer.create(<MovieCard {...mock}/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
