import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const SignIn = ({onSubmit, onChange, fieldValidity, fieldTouched, authFailed = false}) => {
  return (
    <Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={onSubmit}>
            {authFailed && <div className="sign-in__message">
              <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
            </div>}
            <div className="sign-in__fields">
              <div className={`sign-in__field ${(!fieldValidity.email && fieldTouched.email) ? `sign-in__field--error` : ``}`}>
                <input className="sign-in__input" type="email" placeholder="Email address" name="email"
                  id="user-email" onChange={onChange} />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={`sign-in__field ${(!fieldValidity.password && fieldTouched.password) ? `sign-in__field--error` : ``}`}>
                <input className="sign-in__input" type="password" placeholder="Password" name="password"
                  id="user-password" onChange={onChange} />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
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

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  fieldValidity: PropTypes.object.isRequired,
  fieldTouched: PropTypes.object.isRequired,
  authFailed: PropTypes.bool
};
