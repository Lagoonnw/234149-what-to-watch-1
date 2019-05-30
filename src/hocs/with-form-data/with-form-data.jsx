import React, {PureComponent} from 'react';
import {validator} from '../../helpers/validators/validators';
import {FormFieldName} from '../../constants/constants';
import PropTypes from 'prop-types';
import {makeObjectWithKeysFromArray} from '../../helpers/make-object-keys-from-array/make-object-keys-from-array';

export const withFormData = (Component) => {
  class WithFormData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        email: null,
        password: null,
        fieldValidity: {
          email: false,
          password: false,
        },
        fieldTouched: {
          email: false,
          password: false,
        }
      };
      this._submitHandler = this._submitHandler.bind(this);
      this._changeHandler = this._changeHandler.bind(this);
    }

    render() {
      const props = Object.assign({}, this.props, {
        onSubmit: this._submitHandler,
        onChange: this._changeHandler,
        fieldValidity: this.state.fieldValidity,
        fieldTouched: this.state.fieldTouched
      });

      return <Component {...props} />;
    }

    _submitHandler(e) {
      e.preventDefault();
      const {fieldValidity: {password, email}} = this.state;

      if (!password || !email) {
        this._setFormTouched();
        return;
      }
      this._sendForm();
    }

    _changeHandler(e) {
      const inputName = e.target.name;
      const inputValue = e.target.value;

      this._setFieldTouched(inputName);
      this._validateField(inputValue, inputName);
      this.setState({[inputName]: inputValue});
    }

    _validateField(inputValue, inputName) {
      const fieldValidity = Object.assign({}, this.state.fieldValidity, {
        [inputName]: validator.required(inputValue) &&
                     (inputName === FormFieldName.EMAIL ? validator.email(inputValue) : true)
      });
      this.setState({fieldValidity});
    }

    _setFieldTouched(inputName) {
      const fieldTouched = Object.assign({}, this.state.fieldTouched, {
        [inputName]: true
      });
      this.setState({fieldTouched});
    }

    _setFormTouched() {
      const fieldTouched = makeObjectWithKeysFromArray(Object.keys(this.state.fieldTouched), true);
      this.setState({fieldTouched});
    }

    _sendForm() {
      const {password, email} = this.state;
      this.props.login({email, password});
    }
  }

  WithFormData.propTypes = {
    login: PropTypes.func.isRequired
  };

  return WithFormData;
};
