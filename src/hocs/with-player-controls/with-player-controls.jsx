import React, {PureComponent} from 'react';

export const withPlayerControls = (Component) => {
  class WithControls extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false
      };
      this._playBtnClickHandler = this._playBtnClickHandler.bind(this);
      this._pauseBtnClickHandler = this._pauseBtnClickHandler.bind(this);
    }

    render() {
      const props = Object.assign({}, this.props, {
        isPlaying: this.state.isPlaying,
        onPlayBtnClick: this._playBtnClickHandler,
        onPauseBtnClick: this._pauseBtnClickHandler
      });

      return <Component {...props}/>;
    }

    _playBtnClickHandler() {
      this.setState({isPlaying: !this.state.isPlaying});
    }
    _pauseBtnClickHandler() {
      this.setState({isPlaying: !this.state.isPlaying});
    }
  }

  return WithControls;
};
