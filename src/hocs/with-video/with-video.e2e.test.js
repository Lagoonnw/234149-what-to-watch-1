import React from 'react';
import {mount} from 'enzyme';
import PropTypes from 'prop-types';
import {withVideo} from './with-video.jsx';

const Mock = ({reference}) => <video ref={reference}/>;
const WrappedMock = withVideo(Mock);

describe(`With-video HOC test`, () => {
  test(`Should create ref and init video`, () => {
    const spy = jest.spyOn(WrappedMock.prototype, `_initCurrentPlayer`);
    mount(<WrappedMock src={`vid.mp4`} isPlaying={true} />);
    expect(spy).toHaveBeenCalled();
  });
});

Mock.propTypes = {
  reference: PropTypes.object.isRequired
};
