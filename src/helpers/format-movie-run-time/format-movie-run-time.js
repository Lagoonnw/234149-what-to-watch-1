export const formatMovieRunTime = (runtime) => {
  runtime = (typeof runtime === `number`) ? runtime : parseInt(runtime, 10);
  return `${Math.trunc(runtime / 60)}h ${runtime % 60}m`;
};
