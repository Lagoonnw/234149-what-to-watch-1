import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from "./movies-list";

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

const mock = [
  {
    id: 54545454,
    name: `Snatch`,
    imgSrc: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  },
  {
    id: 9898988,
    name: `Pulp Fiction`,
    imgSrc: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  },
  {
    id: 545468787,
    name: `The Witcher`,
    imgSrc: `pic.jpg`,
    src: `video.mp4`,
    onMouseLeave: jest.fn(),
    onMouseEnter: jest.fn()
  }
];

describe(`MoviesList render`, () => {
  test(`Should render MoviesList correctly`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(<MoviesList movies={mock}/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
