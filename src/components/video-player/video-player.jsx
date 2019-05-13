import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
    this.state = {
      isPlaying: props.isPlaying,
      isLoading: true
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    video.src = src;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => this.setState({
      isPlaying: false,
    });

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime
    });
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    const {imgSrc, src, muted, autoPlay, width, height} = this.props;
    return (
      <video
        width={`${width}px`}
        height={`${height}px`}
        controls={true}
        poster={imgSrc}
        src={src}
        muted={muted}
        autoPlay={autoPlay}
        ref={this._videoRef}/>
    );
  }
}

VideoPlayer.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  isPlaying: PropTypes.bool
};

VideoPlayer.defaultProps = {
  muted: false,
  autoPlay: false
};

