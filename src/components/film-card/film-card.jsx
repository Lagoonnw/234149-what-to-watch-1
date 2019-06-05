import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentMovie} from '../../reducers/movies/selectors';
import {FilmOverview} from '../film-overview/film-overview.jsx';
import {FilmDetails} from '../film-details/film-details.jsx';
import {FilmCardNavigation} from '../film-card-navigation/film-card-navigation.jsx';
import {FilmReviews} from '../film-reviews/film-reviews.jsx';
import {FilmHero} from '../film-hero/film-hero.jsx';
import withLoadingReviews from '../../hocs/with-loading-reviews/with-loading-reviews.jsx';
import {withActiveItem} from '../../hocs/with-active-item/with-active-item.jsx';
import MoreLikeThis from '../more-like-this/more-like-this.jsx';

const FilmReviewsWithLoadingReviews = withLoadingReviews(FilmReviews);
const MoreLikeThisWithActiveItem = withActiveItem(MoreLikeThis);

export const FilmCard = ({movie, onClick, activeItem}) => {
  const {id, name, genre, released, posterImage, backgroundColor, backgroundImage} = movie;
  const activeTab = (!activeItem) ? `Overview` : activeItem;

  return (
    <Fragment>
      <div className="visually-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z"
              fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd"
              d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9"
              fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd"
              d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
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
        <FilmHero genre={genre} name={name} backgroundImage={backgroundImage} released={released} />
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc" >
              <FilmCardNavigation onClick={onClick} activeTab={activeTab}/>
              {activeTab === `Overview` && <FilmOverview {...movie}/>}
              {activeTab === `Details` && <FilmDetails {...movie}/>}
              {activeTab === `Reviews` && <FilmReviewsWithLoadingReviews id={id}/>}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoreLikeThisWithActiveItem genre={genre} id={id}/>

        </section>
      </div>
    </Fragment>
  );
};

FilmCard.propTypes = {
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
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const {match: {params: {id}}} = ownProps;

  return Object.assign({}, ownProps, {
    movie: getCurrentMovie(state, parseInt(id, 10))
  });
};

export default connect(mapStateToProps, null)(FilmCard);
