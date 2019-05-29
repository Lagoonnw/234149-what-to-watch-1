import React, {PureComponent} from 'react';

export const withFormData = (Component) => {
  class WithFormData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: null,
        password: null
      };
      this._submitHandler = this._submitHandler.bind(this);
      this._changeHandler = this._changeHandler.bind(this);
      this._blurHandler = this._blurHandler.bind(this);
    }

    render() {
      console.log('', this.state);
      const props = Object.assign({}, this.props, {
        onSubmit: this._submitHandler,
        onChange: this._changeHandler,
        onBlur: this._blurHandler
      });

      return <Component {...props} />;
    }

    _submitHandler(e) {
      e.preventDefault();
      const fd = new FormData();
      window.console.log(``, fd, e);
    }

    _changeHandler(e) {
      console.log('', e.target.value);
    }

    _blurHandler(e) {
      this.setState({[e.target.name]: e.target.value});
      
    }
  }

  return WithFormData;
};
