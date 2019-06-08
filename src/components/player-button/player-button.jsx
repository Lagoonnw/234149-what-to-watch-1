import React from 'react';
import PropTypes from 'prop-types';

export const PlayerButton = ({isPlaying = false, onClick}) => {
  return (
    <button type="button" className="player__play" onClick={onClick}>
      {(isPlaying) ?
        <svg viewBox="0 0 14 21" width="14" height="21"><use xlinkHref="#pause"/></svg> :
        <svg viewBox="0 0 19 19" width="19" height="19"><use xlinkHref="#play-s"/></svg>
      }
      <span>{(isPlaying) ? `Pause` : `Play`}</span>
    </button>
  );
};

PlayerButton.propTypes = {
  isPlaying: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
