import React from 'react';
import {connect} from 'react-redux';
import {getAuthState} from '../../reducers/user/selectors';
import PropTypes from 'prop-types';

export const Header = ({isAuthorized = false}) => {
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
        {isAuthorized && <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>}
        {!isAuthorized && <a href="sign-in.html" className="user-block__link">Sign in</a>}
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorized: getAuthState(state)
});

export default connect(mapStateToProps, null)(Header);
