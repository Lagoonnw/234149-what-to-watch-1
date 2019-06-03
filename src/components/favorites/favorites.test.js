import React from 'react';
import renderer from 'react-test-renderer';
import {createNodeMock} from '../../__mock__/createMockNode';
import {ProviderMock} from '../../__mock__/providerMock';
import {Favorites} from './favorites';

const mockFilms = [
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

describe(`Favorites component snapshot test`, () => {
  test(`Should render Favorites correctly`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(
        <ProviderMock>
          <Favorites movies={mockFilms} fetchMovies={jest.fn()}/>
        </ProviderMock>
        , options);
    expect(tree).toMatchSnapshot();
  });
});
