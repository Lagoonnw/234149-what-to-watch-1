import React, {PureComponent} from 'react';
import {validator} from '../../helpers/validators/validators';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import {moviesAction} from '../../actions/movies/action';
import {getCurrentMovie} from '../../reducers/movies/selectors';

export const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        comment: ``,
        rating: 1,
        fieldValidity: {
          textarea: false,
          radio: false
        }
      };
      this._textareaChangeHandler = this._textareaChangeHandler.bind(this);
      this._radioChangeHandler = this._radioChangeHandler.bind(this);
      this._submitHandler = this._submitHandler.bind(this);

    }

    render() {
      const {fieldValidity: {textarea, radio}} = this.state;
      const props = Object.assign({}, this.props, {
        onTextareaChange: this._textareaChangeHandler,
        onRadioChange: this._radioChangeHandler,
        onSubmit: this._submitHandler,
        rating: this.state.rating,
        disabled: !(textarea && radio)
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
      const {sendReview, movie: {id}, history} = this.props;
      if (!textarea || !radio) {
        return;
      }
      sendReview(id, {comment, rating}).then(() => history.push(`/film/${id}`));
    }
  }

  return WithReviewForm;
};

const mapStateToProps = (state, ownProps) => {
  const {match: {params: {id}}} = ownProps;

  return Object.assign({}, ownProps, {
    movie: getCurrentMovie(state, parseInt(id, 10))
  });
};

const mapDispatchToProps = (dispatch) => ({
  sendReview: (id, data) => dispatch(moviesAction.addReview(id, data))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewForm
);

