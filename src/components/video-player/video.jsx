import React from 'react';
import PropTypes from 'prop-types';
import {DefaultVideoSize} from '../../constants/constants';

export const Video = (props) => {
  const {
    poster,
    src,
    muted,
    autoPlay,
    width,
    height,
    reference
  } = props;

  return (
    <video
      poster={poster}
      width={`${width}px`}
      height={`${height}px`}
      src={src}
      muted={muted}
      autoPlay={autoPlay}
      ref={reference}
      style={{objectFit: `cover`}}
    />
  );
};

Video.propTypes = {
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

Video.defaultProps = {
  muted: false,
  autoPlay: false,
  width: DefaultVideoSize.WIDTH,
  height: DefaultVideoSize.HEIGHT,
  controls: false
};

