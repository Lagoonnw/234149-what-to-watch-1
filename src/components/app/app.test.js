import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import {createNodeMock} from '../../__mock__/createMockNode';
import {ProviderMock} from '../../__mock__/providerMock.jsx';

describe(`App should render correctly`, () => {
  test(`should render App correctly after relaunch`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(
        <ProviderMock>
          <App />
        </ProviderMock>
        , options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
