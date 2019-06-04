import React        from 'react';
import {sortArray}  from "../../helpers/sort-array/sort-array";
import {ReviewCard} from "../review-card/review-card.jsx";

export const FilmReviews = ({reviews}) => {
  const oddReviews = sortArray.byOdd(reviews);
  const evenReviews = sortArray.byEven(reviews);
  console.log('odd', oddReviews);
  console.log('even', evenReviews);

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
