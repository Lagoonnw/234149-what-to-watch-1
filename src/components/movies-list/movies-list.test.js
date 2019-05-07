import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from "./movies-list";

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

describe(`MoviesList render`, () => {
  test(`Should render MoviesList correctly`, () => {
    const tree = renderer.create(<MoviesList movies={mock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
