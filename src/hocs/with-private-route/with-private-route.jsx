import React    from 'react';
import SignIn from "../../components/sign-in/sign-in.jsx";

export const withPrivateRoute = (Component) => {
  return function WithPrivateRoute(props) {
    if (props.location.pathname === `/favorites`) {

    }
    console.log('', props);
    return <Component/>;
  };
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps) {

}
