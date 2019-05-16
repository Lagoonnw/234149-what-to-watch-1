import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}

describe(`App should render correctly`, () => {
  test(`should render App correctly after relaunch`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(<App/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
