import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

describe(`App should render correctly`, () => {
  test(`should render App correctly after relaunch`, () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
