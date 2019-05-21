export const filterMovies = (movies, filter = null) =>
  (!filter) ? movies : movies.filter((movie) => movie.genre === filter);
