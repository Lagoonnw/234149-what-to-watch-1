import React, {PureComponent} from 'react';
import {validator} from '../../helpers/validators/validators';
import PropTypes from 'prop-types';
import {makeObjectWithKeysFromArray} from '../../helpers/make-object-keys-from-array/make-object-keys-from-array';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {userAction} from '../../actions/user/action';
import {formAction} from '../../actions/form/action';
import {getFormError} from '../../reducers/form/selector';

export const withLoginForm = (Component) => {
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

    componentWillUnmount() {
      this.props.resetFormError();
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
      const {name, value} = e.target;

      this._setFieldTouched(name);
      this._validateField(value, name);
      this.setState({[name]: value});
    }

    _validateField(inputValue, inputName) {
      const fieldValidity = Object.assign({}, this.state.fieldValidity, {
        [inputName]: validator.required(inputValue) &&
                     (inputName === `email` ? validator.email(inputValue) : true)
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

      this.props.login({email, password})
        .then(() => {
          if (!this.props.submitFailed) {
            this.props.history.goBack();
          }
        });
    }
  }

  WithFormData.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.object,
    resetFormError: PropTypes.func.isRequired,
    submitFailed: PropTypes.bool.isRequired
  };

  return WithFormData;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  submitFailed: getFormError(state)
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(userAction.login(data)),
  resetFormError: () => dispatch(formAction.resetFormError())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoginForm
);
