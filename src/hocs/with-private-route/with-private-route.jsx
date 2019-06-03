import React from 'react';
import PropTypes from 'prop-types';
import {getAuthStatus} from '../../reducers/user/selectors';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'recompose';

export const withPrivateRoute = (Component) => {
  return function WithPrivateRoute(props) {
    if (props.isAuthorizationRequired) {
      return <Redirect to="/login"/>;
    }
    WithPrivateRoute.propTypes = {
      isAuthorizationRequired: PropTypes.bool.isRequired
    };

    return <Component {...props}/>;
  };
};
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthStatus(state)
});

export default compose(
    connect(mapStateToProps, null),
    withPrivateRoute);


