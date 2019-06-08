export const formatTime = (seconds) => {
  seconds = (typeof seconds === `number`) ? seconds : parseInt(seconds, 10);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  hours = (hours >= 10) ? hours : `0` + hours;
  minutes = (minutes >= 10) ? minutes : `0` + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = (seconds >= 10) ? seconds : `0` + seconds;

  return `${hours}:${minutes}:${seconds}`;
};
