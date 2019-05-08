import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from "./header.jsx";

describe(`Header should render`, () => {
  test(`Should render header component correctly`, () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
