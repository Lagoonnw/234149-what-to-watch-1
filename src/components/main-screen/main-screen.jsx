import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import MoviesFilter from '../movies-filter/movies-filter.jsx';
import {withActiveItem} from '../../hocs/with-active-item/with-active-item.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';
import {connect} from 'react-redux';
import {getAuthStatus} from "../../reducers/user/selectors";
import {withFormData} from '../../hocs/with-form-data/with-form-data.jsx';

const MoviesListWithActiveItem = withActiveItem(MoviesList);
const MoviesFilterWithActiveItem = withActiveItem(MoviesFilter);
const SignInWithFormData = withFormData(SignIn);

export const MainScreen = ({isAuthorizationRequired = false}) => {
  if (isAuthorizationRequired) {
    return <SignInWithFormData />;
  }

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MoviesFilterWithActiveItem />
          <MoviesListWithActiveItem />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

MainScreen.propTypes = {
  isAuthorizationRequired: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthStatus(state)
});

export default connect(mapStateToProps, null)(MainScreen);
