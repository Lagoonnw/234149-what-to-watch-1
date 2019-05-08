import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from "./movies-list";

const mock = [
  {
    id: 54545454,
    name: `Snatch`,
    imgSrc: ``
  },
  {
    id: 9898988,
    name: `Pulp Fiction`,
    imgSrc: ``
  },
  {
    id: 545468787,
    name: `The Witcher`,
    imgSrc: ``
  }
];

describe(`MoviesList render`, () => {
  test(`Should render MoviesList correctly`, () => {
    const tree = renderer.create(<MoviesList movies={mock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
