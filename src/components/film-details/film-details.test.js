import React from 'react';
import renderer from 'react-test-renderer';
import {FilmDetails} from './film-details';

const mockProps = {
  director: `Ivan Petrovich`,
  starring: [`Actor`, `Actress`],
  runTime: 85,
  genre: `Drama`,
  released: 2002
};

test(`Should render Film details correctly`, () => {
  const tree = renderer.create(<FilmDetails {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
