import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from "./header.jsx";
import {ProviderMock} from "../../__mock__/providerMock.jsx";

describe(`Header should render`, () => {
  test(`Should render header component correctly`, () => {
    const tree = renderer.create(
        <ProviderMock>
          <Header
            isAuthorizationRequired={false}
            shouldShowAvatar={false}
            onClick={jest.fn()}
          />
        </ProviderMock>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
