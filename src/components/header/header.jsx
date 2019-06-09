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
    className,
    breadcrumbs
  } = props;

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <Link className="logo__link" to="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {breadcrumbs.length > 0 && <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>}

      <div className="user-block">
        {shouldShowAvatar && <div className="user-block__avatar">
          <Link to="/favorites">
            <img src={userPic} alt="User avatar" width="63" height="63"/>
          </Link>
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
  className: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(PropTypes.string)
};

Header.defaultProps = {
  shouldShowAvatar: false,
  isAuthorizationRequired: false,
  breadcrumbs: []
};

const mapStateToProps = (state, ownProps) => {
  const profile = getUserProfile(state);

  return Object.assign({}, ownProps, {
    shouldShowAvatar: Boolean(profile),
    userPic: (profile) ? `${BASE_URL}${profile[`avatarUrl`]}` : null
  });
};

export default connect(mapStateToProps, null)(Header);
