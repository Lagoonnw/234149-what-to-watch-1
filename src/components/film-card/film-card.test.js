import React from 'react';
import renderer from 'react-test-renderer';
import {ProviderMock} from '../../__mock__/providerMock.jsx';
import {createNodeMock} from '../../__mock__/createMockNode';
import {FilmCard} from './film-card.jsx';

test(`Should render FilmCard correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer.create(
      <ProviderMock>
        <FilmCard
          onClick={jest.fn()}
          saveMovieToFavorite={jest.fn()}
          startPlay={jest.fn()}
          history={{}}
        />
      </ProviderMock>, options
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
