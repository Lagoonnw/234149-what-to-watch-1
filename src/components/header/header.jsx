import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserProfile, getAuthFailedStatus} from '../../reducers/user/selectors';
import {userAction} from '../../actions/user/action';
import {BASE_URL} from '../../constants/constants';

export const Header = (props) => {
  const {
    shouldShowAvatar = false,
    isAuthorizationRequired = false,
    onClick,
    userPic,
  } = props;

  const _onClick = (e) => {
    e.preventDefault();
    onClick(!isAuthorizationRequired);
  };

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
        {shouldShowAvatar && <div className="user-block__avatar">
          <img src={userPic} alt="User avatar" width="63" height="63"/>
        </div>}
        {!shouldShowAvatar && <a href="#" className="user-block__link" onClick={_onClick}>Sign in</a>}
      </div>
    </header>
  );
};

Header.propTypes = {
  shouldShowAvatar: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  userPic: PropTypes.string,
  isAuthorizationRequired: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  const profile = getUserProfile(state);

  return Object.assign({}, ownProps, {
    shouldShowAvatar: Boolean(profile),
    isAuthorizationRequired: getAuthFailedStatus(state),
    userPic: (profile) ? `${BASE_URL}${profile[`avatarUrl`]}` : null
  });
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (status) => dispatch(userAction.setAuthStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
