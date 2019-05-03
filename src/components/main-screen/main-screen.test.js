import React from 'react';
import renderer from 'react-test-renderer';
import {MainScreen} from './main-screen.jsx';

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Snatch`];

describe(`Main screen should render correctly`, () => {
  test(`Should render main screen with 4 movies`, () => {
    const tree = renderer.create(<MainScreen moviesList={moviesList}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
