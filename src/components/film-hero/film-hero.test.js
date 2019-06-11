import React from 'react';
import renderer from 'react-test-renderer';
import {FilmHero} from './film-hero';
import {ProviderMock} from '../../__mock__/providerMock';

const mockProps = {
  id: 2121,
  backgroundImage: `#F5F5F5`,
  name: `Movie`,
  genre: `Action`,
  released: 1992,
  onPlayClick: jest.fn(),
  saveMovieToFavorite: jest.fn(),
  history: {}
};

test(`Should render Film hero correctly`, () => {
  const Component = () => (
    <ProviderMock><FilmHero {...mockProps}/></ProviderMock>
  );
  const tree = renderer.create(<Component/>).toJSON();
  expect(tree).toMatchSnapshot();
});
