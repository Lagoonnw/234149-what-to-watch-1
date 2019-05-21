import React from 'react';
import PropTypes from 'prop-types';
import {VideoPlayer} from '../video-player/video-player.jsx';

export const MovieCard = (props) => {
  const {id, name, poster, src, onMouseEnter, onMouseLeave, onClick, isPlaying = false} = props;
  const _onMouseEnter = () => onMouseEnter(id);
  const _onClick = (evt) => {
    evt.preventDefault();
    onClick(id);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={_onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <VideoPlayer poster={poster} src={src} isPlaying={isPlaying} muted={true}/>
      </div>
      <h3 className="small-movie-card__title" onClick={_onClick}>
        <a className="small-movie-card__link" >{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};
