import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.jsx';

const mockProps = {
  onSubmit: jest.fn(),
  onChange: jest.fn(),
  onBlur: jest.fn(),
  fieldValidity: {
    email: false,
    password: false
  }, fieldTouched: {
    email: false,
    password: false
  }
};

describe(`SignIn snapshot test`, () => {
  test(`Should render component correctly`, () => {
    const tree = renderer.create(<SignIn {...mockProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
