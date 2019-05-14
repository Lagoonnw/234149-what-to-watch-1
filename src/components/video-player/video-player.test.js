import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from "./video-player.jsx";

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

describe(`Video player snapshot`, () => {
  test(`Should render video player correctly`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(<VideoPlayer imgSrc={`pic.jpg`} src={`video.mp4`}/>, options).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
