export const formateMovieRunTime = (runtime) => {
  return `${Math.trunc(runtime / 60)}h ${runtime % 60}m`;
};
