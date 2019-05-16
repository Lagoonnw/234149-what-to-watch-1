import React from 'react';
import PropTypes from 'prop-types';
import {VideoPlayer} from '../video-player/video-player.jsx';

export const MovieCard = (props) => {
  const {id, name, imgSrc, src, onMouseEnter, onMouseLeave, isPlaying = false} = props;
  const _onMouseEnter = () => onMouseEnter(id);

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={_onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <VideoPlayer imgSrc={imgSrc} src={src} isPlaying={isPlaying} muted={true}/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};
