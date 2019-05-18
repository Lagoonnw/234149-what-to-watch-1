import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from './movies-list';
import {createNodeMock} from '../../__mock__/createMockNode';

const mock = [
  {
    id: 54545454,
    name: `Snatch`,
    genre: `horror`,
    poster: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  },
  {
    id: 9898988,
    name: `Pulp Fiction`,
    genre: `horror`,
    poster: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  },
  {
    id: 545468787,
    name: `The Witcher`,
    genre: `horror`,
    poster: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  }
];

describe(`MoviesList render`, () => {
  test(`Should render MoviesList correctly`, () => {
    const options = {createNodeMock};
    const setMovies = jest.fn();
    const tree = renderer.create(<MoviesList movies={mock} setMovies={setMovies}/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
