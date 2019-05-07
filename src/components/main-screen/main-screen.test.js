import React from 'react';
import renderer from 'react-test-renderer';
import {MainScreen} from './main-screen.jsx';

const mock = [
  {
    name: `Snatch`,
    imgSrc: ``
  },
  {
    name: `Pulp Fiction`,
    imgSrc: ``
  },
  {
    name: `The Witcher`,
    imgSrc: ``
  }
];

describe(`Main screen should render correctly`, () => {
  test(`Should render main-screen with moviesList length`, () => {
    const tree = renderer.create(<MainScreen moviesList={mock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
