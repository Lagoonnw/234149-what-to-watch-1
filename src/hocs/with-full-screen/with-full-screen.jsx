import React, {PureComponent, createRef} from 'react';

export const withFullScreen = (Component) => {
  class WithFullScreen extends PureComponent {
    constructor(props) {
      super(props);
      this._container = createRef();
      this.state = {
        height: 0,
        width: 0,
        time: 0,
        duration: 0,
        isPlaying: true,
        fullscreen: false
      };
      this._getTime = this._getTime.bind(this);
      this._getDuration = this._getDuration.bind(this);
      this._playBtnClickHandler = this._playBtnClickHandler.bind(this);
      this._fullscreenBtnClickHandler = this._fullscreenBtnClickHandler.bind(this);
      this._fullScreenChangeHandler = this._fullScreenChangeHandler.bind(this);
    }

    componentDidMount() {
      const container = this._container.current;
      this.setState({
        height: container.offsetHeight,
        width: container.offsetWidth
      });
    }

    render() {
      const {height, width, isPlaying, time, duration, fullscreen} = this.state;
      const props = Object.assign({}, this.props, {
        duration: Math.trunc(duration),
        time: Math.trunc(time),
        muted: false,
        onFullScreenChange: this._fullScreenChangeHandler,
        onFullScreenBtnClick: this._fullscreenBtnClickHandler,
        onDurationChange: this._getDuration,
        onTimeChange: this._getTime,
        onPlayBtnClick: this._playBtnClickHandler,
        reference: this._container,
        height,
        width,
        isPlaying,
        fullscreen
      });

      return <Component {...props} />;
    }

    _getTime(value) {
      this.setState({time: value});
    }

    _getDuration(value) {
      this.setState({duration: value});
    }

    _playBtnClickHandler() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    _fullscreenBtnClickHandler() {
      this.setState({fullscreen: true});
    }

    _fullScreenChangeHandler(value) {
      this.setState({fullscreen: value});
    }
  }

  return WithFullScreen;
};
