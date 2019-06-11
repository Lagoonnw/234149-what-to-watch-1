import React from 'react';
import renderer from 'react-test-renderer';
import {MainScreen} from './main-screen.jsx';
import {createNodeMock} from '../../__mock__/createMockNode';
import {ProviderMock} from '../../__mock__/providerMock.jsx';

describe(`Main screen should render correctly`, () => {
  test(`Should render main-screen with moviesList length`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(
        <ProviderMock>
          <MainScreen history={{}}/>
        </ProviderMock>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
