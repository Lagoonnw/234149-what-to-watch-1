import React from 'react';
import renderer from 'react-test-renderer';
import {MainScreen} from './main-screen.jsx';

const mock = [
  {
    id: 87987,
    name: `Snatch`,
    imgSrc: ``
  },
  {
    id: 8789854,
    name: `Pulp Fiction`,
    imgSrc: ``
  },
  {
    id: 9898321,
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
