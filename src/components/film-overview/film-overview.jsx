import React, {Fragment}      from 'react';
import {convertReviewRaiting} from "../../helpers/convert-review-raiting/convert-review-raiting";

export const FilmOverview = ({description, rating, director, starring, scoresCount}) => {
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{`${rating.toFixed(1)}`}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{`${convertReviewRaiting(rating)}`}</span>
          <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="movie-card__starring"><strong>{`Starring: ${starring.join(`, `)}`}</strong></p>
      </div>
    </Fragment>
  );
};

