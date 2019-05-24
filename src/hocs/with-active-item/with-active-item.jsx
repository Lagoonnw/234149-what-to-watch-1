import React, {PureComponent} from 'react';

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

    _mouseEnterHandler(activeItem, timeout) {
      this._timerId = setTimeout(() => this.setState({activeItem}), timeout);
    }

    _mouseLeaveHandler() {
      clearTimeout(this._timerId);
      this.setState({activeItem: null});
    }
  }

  return WithActiveItem;
};


