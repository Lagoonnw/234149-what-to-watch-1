import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import {RATING_VALUES} from '../../constants/constants';

export const AddReview = (props) => {
  const {movie, onTextareaChange, onRadioChange, rating, disabled, onSubmit, formValidity, isSubmiting} = props;

  if (!movie) {
    return <div>Loading...</div>;
  }
  const {name, posterImage, backgroundImage, backgroundColor} = movie;

  return (
    <Fragment>
      <div className="visually-hidden">
        <svg>
          <symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5"
                points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol>
          <symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z"
              fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd"
              d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9"
              fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd"
              d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9"
              fillOpacity="0.7"/>
          </symbol>
          <symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z"
              fill="#EEE5B5"/>
          </symbol>
          <symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero"
                points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol>
          <symbol id="play-s" viewBox="0 0 19 19">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0L19 9.5L0 19V0Z" fill="#EEE5B5"/>
          </symbol>
        </svg>
      </div>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header {...props}/>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={name} width="218"
              height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form onSubmit={onSubmit} className="add-review__form" style={{backgroundColor}}>
            <div className="rating">
              <div className="rating__stars">
                {RATING_VALUES.map((value) => (
                  <Fragment key={`rating-${value}`}>
                    <input
                      className="rating__input"
                      id={`star-${value}`}
                      type="radio"
                      name="rating"
                      value={value}
                      onChange={onRadioChange}
                      checked={rating === value}
                      disabled={isSubmiting}
                    />
                    <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
                  </Fragment>
                ))}
              </div>
            </div>

            <div className="add-review__text" style={{backgroundColor, filter: `sepia(20%)`}}>
              <textarea className="add-review__textarea" name="review-text" id="review-text"
                placeholder="Review text" aria-multiline={true} onChange={onTextareaChange} disabled={isSubmiting}/>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  style={{color: `rgba(56,44,42,.7)`}}
                  disabled={disabled}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
          {!formValidity.textarea && <p style={{color: `red`}}>Your comment should be from 50 to 400 characters</p>}
          {!formValidity.radio && <p style={{color: `red`}}>Rating is required</p>}
        </div>

      </section>
    </Fragment>
  );
};

AddReview.propTypes = {
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
  }),
  onTextareaChange: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  rating: PropTypes.number,
  disabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formValidity: PropTypes.shape({
    radio: PropTypes.bool,
    textarea: PropTypes.bool
  }),
  isSubmiting: PropTypes.bool
};
