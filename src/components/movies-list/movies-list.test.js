import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from './movies-list';
import {createNodeMock} from '../../__mock__/createMockNode';

const mock = [
  {
    id: 54545454,
    name: `Snatch`,
    genre: `horror`,
    previewImage: `pic.jpg`,
    previewVideoLink: `video.mp4`,
  },
  {
    id: 9898988,
    name: `Pulp Fiction`,
    genre: `horror`,
    previewImage: `pic.jpg`,
    previewVideoLink: `video.mp4`,
  },
  {
    id: 545468787,
    name: `The Witcher`,
    genre: `horror`,
    previewImage: `pic.jpg`,
    previewVideoLink: `video.mp4`,
  }
];

describe(`MoviesList render`, () => {
  test(`Should render MoviesList correctly`, () => {
    const options = {createNodeMock};
    const setMovies = jest.fn();
    const onClick = jest.fn();
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const tree = renderer.create(
        <MoviesList
          movies={mock}
          setMovies={setMovies}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />, options
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
