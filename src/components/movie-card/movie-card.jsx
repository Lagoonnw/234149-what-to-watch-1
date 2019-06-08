import React from 'react';
import PropTypes from 'prop-types';
import {Video} from '../video/video.jsx';
import {withVideo} from '../../hocs/with-video/with-video.jsx';
import {Link} from 'react-router-dom';

const VideoPlayerWrapped = withVideo(Video);

export const MovieCard = (props) => {
  const {
    id,
    name,
    poster,
    src,
    onMouseEnter,
    onMouseLeave,
    isPlaying
  } = props;
  const _onMouseEnter = () => onMouseEnter(id);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={_onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={`/film/${id}`}>
        <div className="small-movie-card__image">
          <VideoPlayerWrapped poster={poster} src={src} isPlaying={isPlaying} muted={true}/>
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/film/${id}`} className="small-movie-card__link" >{name}</Link>
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
  history: PropTypes.object
};

MovieCard.defaultProps = {
  isPlaying: false
};
