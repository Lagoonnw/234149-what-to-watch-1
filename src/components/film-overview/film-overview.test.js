import React from 'react';
import renderer from 'react-test-renderer';
import {FilmOverview} from './film-overview';

const mockProps = {
  description: `Some text`,
  rating: 8.9,
  director: `John Dow`,
  starring: [`Actor`, `Actress`],
  scoresCount: 894
};

test(`Should render Film overview correctly`, () => {
  const tree = renderer.create(<FilmOverview {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
