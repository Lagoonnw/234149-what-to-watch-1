import React        from 'react';
import {formatDate} from '../../helpers/format-date/format-date';

export const ReviewCard = ({comment, user, rating, date}) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user.name}</cite>
        <time
          className="review__date"
          dateTime={`${formatDate(date).localFormat}`}
        >
          {`${formatDate(date).comprehensible}`}
        </time>
      </footer>
    </blockquote>

    <div className="review__rating">{`${rating.toFixed(1)}`}</div>
  </div>
);

