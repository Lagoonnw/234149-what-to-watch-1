import React from 'react';
import renderer from 'react-test-renderer';
import {Video} from './video.jsx';
import {createNodeMock} from '../../__mock__/createMockNode';

describe(`Video player snapshot`, () => {
  test(`Should render video player correctly`, () => {
    const options = {createNodeMock};
    const ref = React.createRef();
    const tree = renderer.create(
        <Video
          poster={`pic.jpg`}
          src={`video.mp4`}
          reference={ref}/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
