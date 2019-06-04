import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {getSortedReviews, getReviews} from "../../reducers/movies/selectors";
import {moviesAction} from "../../actions/movies/action";
import {compose} from "recompose";

export const withLoadingReviews = (Component) => {
  class WithLoadingReviews extends PureComponent {
    constructor(props) {
      super(props);
      props.loadReviews(props.id);
    }

    componentWillUnmount() {
      this.props.clearReviews();
    }

    render() {
      const {reviews} = this.props;
      return <Component reviews={reviews}/>;
    }
  }

  return WithLoadingReviews;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  reviews: getSortedReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (id) => dispatch(moviesAction.loadReviews(id)),
  clearReviews: () => dispatch(moviesAction.clearReviews())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoadingReviews
);
