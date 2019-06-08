import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this.state = {
        progress: 0,
        duration: 0
      };
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;
      this._initCurrentPlayer({video, src});
    }

    componentDidUpdate() {
      const {onTimeChange, onDurationChange, controls, isPlaying} = this.props;
      const video = this._videoRef.current;

      if (onTimeChange) {
        onTimeChange(this.state.progress);
      }
      if (onDurationChange) {
        onDurationChange(this.state.duration);
      }
      this._playHandler({video, controls, isPlaying});
      this._fillScreenHandler(video);
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      this._resetCurrentPlayer(video);
    }

    render() {
      const props = Object.assign({}, this.props, {
        isPlaying: this.state.isPlaying,
        reference: this._videoRef,
        progress: this.state.progress
      });

      return <Component {...props} />;
    }

    _fillScreenHandler(video) {
      const {fullscreen, onFullScreenChange} = this.props;
      if (fullscreen && !document.fullscreenElement) {
        video.requestFullscreen();
        onFullScreenChange(true);
      }
    }

    _initCurrentPlayer({video, src}) {
      video.src = src;

      video.ontimeupdate = () => this.setState({
        progress: video.currentTime
      });
      video.onloadedmetadata = () => this.setState({
        duration: video.duration
      });

      video.onfullscreenchange = () => {
        const {onFullScreenChange} = this.props;
        if (!document.fullscreenElement) {
          onFullScreenChange(false);
        }
      };
    }

    _resetCurrentPlayer(video) {
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
      video.ontimeupdate = null;
      video.onloadedmetadata = null;
      video.onfullscreenchange = null;
    }

    _playHandler({video, controls, isPlaying}) {
      if (!controls) {
        if (isPlaying) {
          video.play();
        } else {
          this._pauseVideoHandler(video);
        }
      }
    }

    _pauseVideoHandler(video) {
      if (this.props.muted) {
        video.pause();
        video.load();
      } else if (!this.props.muted) {
        video.pause();
      }
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    muted: PropTypes.bool,
    fullscreen: PropTypes.bool,
    onTimeChange: PropTypes.func,
    onDurationChange: PropTypes.func,
    onFullScreenChange: PropTypes.func
  };

  return WithVideo;
};
