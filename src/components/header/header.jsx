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
    movie
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

      {Boolean(movie) && <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`/film/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>}

      <div className="user-block">
        {shouldShowAvatar && <div className="user-block__avatar">
          <Link to="/myList">
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
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  })
};

Header.defaultProps = {
  shouldShowAvatar: false,
  isAuthorizationRequired: false
};

const mapStateToProps = (state, ownProps) => {
  const profile = getUserProfile(state);

  return Object.assign({}, ownProps, {
    shouldShowAvatar: Boolean(profile),
    userPic: (profile) ? `${BASE_URL}${profile[`avatarUrl`]}` : null,
    movie: (ownProps.movie) ? ownProps.movie : null
  });
};

export default connect(mapStateToProps, null)(Header);
