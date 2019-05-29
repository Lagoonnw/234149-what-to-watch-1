import React           from 'react';
import {connect}       from 'react-redux';
import {getAuthStatus} from '../../reducers/user/selectors';
import PropTypes       from 'prop-types';

export const Header = ({isAuthorizationRequired = true}) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {isAuthorizationRequired && <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>}
        {!isAuthorizationRequired && <a href="sign-in.html" className="user-block__link">Sign in</a>}
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthStatus(state)
});

export default connect(mapStateToProps, null)(Header);
