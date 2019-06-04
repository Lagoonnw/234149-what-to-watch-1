export const VIDEO_PLAY_DELAY_TIME = 1000;
export const API_BASE_URL = `https://es31-server.appspot.com/wtw`;
export const BASE_URL = `https://es31-server.appspot.com`;

export const genresList = new Set([
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
]);

export const GenreMap = {
  Comedies: `Comedy`,
  Crime: `Crime`,
  Documentary: `Documentary`,
  Dramas: `Drama`,
  Horror: `Horror`,
  Romance: `Romance`,
  Thrillers: `Thriller`,
  [`Sci-Fi`]: `Sci-fi`,
  [`Kids & Family`]: `Family`
};

export const DefaultVideoSize = {
  WIDTH: 280,
  HEIGHT: 175
};

export const APIEndpoints = {
  FILMS: `/films`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments/`
};

export const ResponseStatus = {
  OK: 200,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  BAD_REQUEST: 400
};

export const FilmCardTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const Raiting = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};
