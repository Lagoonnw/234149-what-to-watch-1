import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from './video-player';
import {createNodeMock} from '../../__mock__/createMockNode';

test(`Should render Video player correctly`, () => {
  const ref = React.createRef();
  const options = {createNodeMock};
  const tree = renderer.create(
      <VideoPlayer
        time={454545}
        duration={54121}
        isPlaying={false}
        fullscreen={false}
        exitPlayer={jest.fn()}
        onDurationChange={jest.fn()}
        onFullScreenChange={jest.fn()}
        onTimeChange={jest.fn()}
        reference={ref}
        onPlayBtnClick={jest.fn()}
        onFullScreenBtnClick={jest.fn()}
        movie={{
          videoLink: `/movie.mp4`,
          previewImage: `pic.jpg`
        }}
      />, options
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
