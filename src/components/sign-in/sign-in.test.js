import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.jsx';
import {ProviderMock} from '../../__mock__/providerMock.jsx';

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
    const tree = renderer.create(<ProviderMock><SignIn {...mockProps}/></ProviderMock>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
