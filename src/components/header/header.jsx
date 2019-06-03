import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserProfile} from '../../reducers/user/selectors';
import {BASE_URL} from '../../constants/constants';
import {Link} from 'react-router-dom';

export const Header = (props) => {
  const {
    shouldShowAvatar,
    userPic,
    className
  } = props;

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {shouldShowAvatar && <div className="user-block__avatar">
          <img src={userPic} alt="User avatar" width="63" height="63"/>
        </div>}
        {!shouldShowAvatar && <Link className="user-block__link" to="/login">Sign in</Link>}
      </div>
    </header>
  );
};

Header.propTypes = {
  shouldShowAvatar: PropTypes.bool,
  userPic: PropTypes.string,
  isAuthorizationRequired: PropTypes.bool,
  className: PropTypes.string
};

Header.defaultProps = {
  shouldShowAvatar: false,
  isAuthorizationRequired: false
};

const mapStateToProps = (state, ownProps) => {
  const profile = getUserProfile(state);

  return Object.assign({}, ownProps, {
    shouldShowAvatar: Boolean(profile),
    userPic: (profile) ? `${BASE_URL}${profile[`avatarUrl`]}` : null
  });
};

export default connect(mapStateToProps, null)(Header);
