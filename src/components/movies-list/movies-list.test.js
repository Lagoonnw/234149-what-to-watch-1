import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from './movies-list';
import {createNodeMock} from '../../__mock__/createMockNode';
import {ProviderMock} from '../../__mock__/providerMock.jsx';

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
    const onClick = jest.fn();
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const tree = renderer.create(
        <ProviderMock>
          <MoviesList
            movies={mock}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </ProviderMock>, options
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
