import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {DefaultVideoSize} from '../../constants/constants';

export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
    this.state = {
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    this._initCurrentPlayer({video, src});
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    this._resetCurrentPlayer(video);
  }

  render() {
    const {
      imgSrc,
      src,
      muted,
      autoPlay,
      width,
      height,
      controls
    } = this.props;

    return (
      <video
        poster={imgSrc}
        width={`${width}px`}
        height={`${height}px`}
        controls={controls}
        src={src}
        muted={muted}
        autoPlay={autoPlay}
        ref={this._videoRef}
      />
    );
  }

  _initCurrentPlayer({video, src}) {
    video.src = src;

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => this.setState({
      isPlaying: false,
    });
  }

  _resetCurrentPlayer(video) {
    video.onplay = null;
    video.onpause = null;
    video.src = ``;
  }
}

VideoPlayer.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  isPlaying: PropTypes.bool,
  controls: PropTypes.bool
};

VideoPlayer.defaultProps = {
  muted: false,
  autoPlay: false,
  width: DefaultVideoSize.WIDTH,
  height: DefaultVideoSize.HEIGTH,
  controls: false
};

