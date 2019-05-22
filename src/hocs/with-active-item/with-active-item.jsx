import React, {PureComponent}  from 'react';
import PropTypes               from 'prop-types';
import {VIDEO_PLAY_DELAY_TIME} from "../../constants/constants";

export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this._clickHandler = this._clickHandler.bind(this);
      this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
      this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
      this.state = {
        activeItem: null
      };
    }

    render() {
      const props = Object.assign({}, this.props, {
        onClick: this._clickHandler,
        onMouseEnter: this._mouseEnterHandler,
        onMouseLeave: this._mouseLeaveHandler,
        activeItem: this.state.activeItem,
      });
      return <Component {...props}/>;
    }

    _clickHandler(activeItem) {
      this.setState({activeItem});
    }

    _mouseEnterHandler(activeItem) {
      this._timerId = setTimeout(() => this.setState({activeItem}), VIDEO_PLAY_DELAY_TIME);
    }

    _mouseLeaveHandler() {
      clearTimeout(this._timerId);
      this.setState({activeItem: null});
    }
  }

  return WithActiveItem;
};


