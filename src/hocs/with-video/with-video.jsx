import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this.state = {
        isPlaying: props.isPlaying,
        progress: 0
      };
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;
      this._initCurrentPlayer({video, src});
    }

    componentDidUpdate() {
      const {onTimeChange} = this.props;
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        video.play();
      } else {
        this._pauseVideo(video);
      }
      if (onTimeChange) {
        onTimeChange(this.state.progress);
      }
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

    _fillScreenHandler(video){
      // if(video.fu)
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

      video.ontimeupdate = () => this.setState({
        progress: video.currentTime
      });
    }

    _resetCurrentPlayer(video) {
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
      video.ontimeupdate = null;
    }

    _pauseVideo(video) {
      if (!this.props.controls) {
        video.pause();
        video.load();
      } else {
        video.pause();
      }
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    onTimeChange: PropTypes.func
  };

  return WithVideo;
};
