import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from './video-player.jsx';
import {createNodeMock} from '../../__mock__/createMockNode';

describe(`Video player snapshot`, () => {
  test(`Should render video player correctly`, () => {
    const options = {createNodeMock};
    const ref = React.createRef();
    const tree = renderer.create(<VideoPlayer poster={`pic.jpg`} src={`video.mp4`} reference={ref}/>, options).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
