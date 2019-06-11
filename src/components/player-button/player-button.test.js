import React from 'react';
import renderer from 'react-test-renderer';
import {PlayerButton} from './player-button.jsx';

test(`Should render Player button correctly`, () => {
  const tree = renderer.create(
      <PlayerButton onClick={jest.fn()}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
