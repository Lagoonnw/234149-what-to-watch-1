export const formateMovieRunTime = (runtime) => {
  return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
};
