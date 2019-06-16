import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {validator} from '../../helpers/validators/validators';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {moviesAction} from '../../actions/movies/action';
import {getCurrentMovie} from '../../reducers/movies/selectors';
import {getFormError} from '../../reducers/form/selector';
import {formAction} from '../../actions/form/action';

export const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        comment: ``,
        rating: null,
        isSubmiting: false,
        fieldValidity: {
          textarea: false,
          radio: false
        }
      };
      this._textareaChangeHandler = this._textareaChangeHandler.bind(this);
      this._radioChangeHandler = this._radioChangeHandler.bind(this);
      this._submitHandler = this._submitHandler.bind(this);
    }

    componentWillUnmount() {
      this.props.resetFormError();
    }

    render() {
      const {fieldValidity: {textarea, radio}, submitFailed} = this.state;
      const props = Object.assign({}, this.props, {
        onTextareaChange: this._textareaChangeHandler,
        onRadioChange: this._radioChangeHandler,
        onSubmit: this._submitHandler,
        rating: this.state.rating,
        disabled: !(textarea && radio) && !submitFailed,
        formValidity: this.state.fieldValidity,
        isSubmiting: this.state.isSubmiting
      });

      return <Component {...props}/>;
    }

    _textareaChangeHandler(e) {
      this.setState({comment: e.target.value});
      const fieldValidity = Object.assign({}, this.state.fieldValidity, {
        textarea: validator.minMax(e.target.value.length, {min: 40, max: 400})
      });
      this.setState({fieldValidity});
    }

    _radioChangeHandler(e) {
      this.setState({rating: parseInt(e.target.value, 10)});
      const fieldValidity = Object.assign({}, this.state.fieldValidity, {
        radio: validator.minMax(e.target.value, {min: 1, max: 5})
      });
      this.setState({fieldValidity});
    }

    _submitHandler(e) {
      e.preventDefault();
      const {fieldValidity: {textarea, radio}, comment, rating} = this.state;
      const {sendReview, movie: {id}, history, submitFailed} = this.props;

      if (!textarea || !radio) {
        return;
      }
      this.setState({
        isSubmiting: true
      });
      sendReview(id, {comment, rating}).then(() => {
        if (!submitFailed) {
          history.push(`/film/${id}`);
        }
      });
    }
  }

  WithReviewForm.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      posterImage: PropTypes.string,
      previewImage: PropTypes.string,
      backgroundImage: PropTypes.string,
      backgroundColor: PropTypes.string,
      videoLink: PropTypes.string,
      previewVideoLink: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
      scoresCount: PropTypes.number,
      director: PropTypes.string,
      starring: PropTypes.arrayOf(PropTypes.string),
      runTime: PropTypes.number,
      genre: PropTypes.string,
      released: PropTypes.number,
      isFavorite: PropTypes.bool
    }),
    submitFailed: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    sendReview: PropTypes.func.isRequired,
    resetFormError: PropTypes.func.isRequired
  };

  return WithReviewForm;
};

const mapStateToProps = (state, ownProps) => {
  const {match: {params: {id}}} = ownProps;

  return Object.assign({}, ownProps, {
    movie: getCurrentMovie(state, parseInt(id, 10)),
    submitFailed: getFormError(state)
  });
};

const mapDispatchToProps = (dispatch) => ({
  sendReview: (id, data) => dispatch(moviesAction.addReview(id, data)),
  resetFormError: () => dispatch(formAction.resetFormError())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewForm
);

