import React from 'react';
import PropTypes from 'prop-types';
import {sortArray} from '../../helpers/sort-array/sort-array';
import {ReviewCard} from '../review-card/review-card.jsx';

export const FilmReviews = ({reviews = []}) => {
  const oddReviews = sortArray.byOdd(reviews);
  const evenReviews = sortArray.byEven(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {oddReviews.map((review) => (<ReviewCard key={`review-${review.id}-${review.user.name}`} {...review}/>))}
      </div>
      <div className="movie-card__reviews-col">
        {evenReviews.map((review) => (<ReviewCard key={`review-${review.id}-${review.user.name}`} {...review}/>))}
      </div>
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  }))
};
