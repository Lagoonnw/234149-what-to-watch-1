import React from 'react';
import renderer from 'react-test-renderer';
import {ProviderMock} from '../../__mock__/providerMock';
import {createNodeMock} from '../../__mock__/createMockNode';
import {MoreLikeThis} from './more-like-this.jsx';

test(`Should render MoreLikeThis correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer.create(
      <ProviderMock>
        <MoreLikeThis onMouseLeave={jest.fn()} onMouseEnter={jest.fn()} />
      </ProviderMock>, options
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
