export const addFavoriteMovie = (item, movies) => {
  if (movies && !Array.isArray(movies)) {
    throw new Error(`Movies should be an array`);
  }

  const films = (movies) ? [...movies] : [];
  films.push(item);
  return films;
};

