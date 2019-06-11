import React from 'react';
import PropTypes from 'prop-types';
import {getAuthStatus} from '../../reducers/user/selectors';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';

export const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    const {isAuthorizationRequired, match: {path}} = props;

    if (!isAuthorizationRequired && path === `/login`) {
      return <Redirect to="/"/>;
    }
    if (props.isAuthorizationRequired && path !== `/login`) {
      return <Redirect to="/login"/>;
    }

    return <Component {...props}/>;
  };

  WithPrivateRoute.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
  };
  return WithPrivateRoute;
};
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthStatus(state)
});

export default compose(
    connect(mapStateToProps, null),
    withPrivateRoute);


