import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

export const withVideo = (Component) => {
  class WithVideo extends PureComponent {
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
      const props = Object.assign({}, this.props, {
        isPlaying: this.state.isPlaying,
        reference: this._videoRef
      });

      return <Component {...props} />;
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

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired
  };

  return WithVideo;
};
