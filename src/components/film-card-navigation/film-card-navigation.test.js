import React from 'react';
import renderer from 'react-test-renderer';
import {FilmCardNavigation} from './film-card-navigation.jsx';

test(`Should render FilmCardNavigation correctly`, () => {
  const tree = renderer.create(
      <FilmCardNavigation
        activeTab={`Overview`}
        onClick={jest.fn()}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
