import React from 'react';
import renderer from 'react-test-renderer';
import {MainScreen} from './main-screen.jsx';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

const mock = [
  {
    id: 87987,
    name: `Snatch`,
    imgSrc: `pic.jpg`,
    src: `video.mp4`,
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  },
  {
    id: 8789854,
    name: `Pulp Fiction`,
    imgSrc: `pic.jpg`,
    src: `video.mp4`,
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  },
  {
    id: 9898321,
    name: `The Witcher`,
    imgSrc: `pic.jpg`,
    src: `video.mp4`,
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  }
];

describe(`Main screen should render correctly`, () => {
  test(`Should render main-screen with moviesList length`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(<MainScreen moviesList={mock}/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
