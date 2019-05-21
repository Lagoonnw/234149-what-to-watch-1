import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this._clickHandler = this._clickHandler.bind(this);
      this.state = {
        activeItem: null
      };
    }

    render() {
      const props = Object.assign({}, this.props, {
        onClick: this._clickHandler,
        activeItem: this.state.activeItem
      });
      return <Component {...props}/>;
    }

    _clickHandler(activeItem) {
      this.setState({activeItem});
    }
  }

  return WithActiveItem;
};


