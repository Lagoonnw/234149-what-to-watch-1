import React from 'react';
import PropTypes from 'prop-types';
import {DefaultVideoSize} from '../../constants/constants';

export const VideoPlayer = (props) => {
  const {
    poster,
    src,
    muted,
    autoPlay,
    width,
    height,
    controls,
    reference
  } = props;

  return (
    <video
      poster={poster}
      width={`${width}px`}
      height={`${height}px`}
      controls={controls}
      src={src}
      muted={muted}
      autoPlay={autoPlay}
      ref={reference}
    />
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  isPlaying: PropTypes.bool,
  controls: PropTypes.bool,
  reference: PropTypes.object.isRequired
};

VideoPlayer.defaultProps = {
  muted: false,
  autoPlay: false,
  width: DefaultVideoSize.WIDTH,
  height: DefaultVideoSize.HEIGHT,
  controls: false
};

