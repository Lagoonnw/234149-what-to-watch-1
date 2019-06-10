export const VIDEO_PLAY_DELAY_TIME = 1000;
export const MORE_LIKE_THIS_NUMBER = 4;
export const BLACK_COLOR = `000000`;
export const MOVIES_PER_PAGE = 20;
export const RATING_VALUES = [1, 2, 3, 4, 5];
export const API_BASE_URL = `https://es31-server.appspot.com/wtw`;
export const BASE_URL = `https://es31-server.appspot.com`;

export const genresList = new Set([
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Adventure`,
  `Action`,
  `Romance`,
  `Fantasy`,
  `Thrillers`
]);

export const GenreMap = {
  Comedies: `Comedy`,
  Crime: `Crime`,
  Documentary: `Documentary`,
  Dramas: `Drama`,
  Action: `Action`,
  Romance: `Romance`,
  Thrillers: `Thriller`,
  Adventures: `Adventure`,
  Fantasy: `Fantasy`
};

export const DefaultVideoSize = {
  WIDTH: 280,
  HEIGHT: 175
};

export const APIEndpoints = {
  FILMS: `/films`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments/`,
  PROMO: `/films/promo`
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

export const FavoritesRequest = {
  ADD: 1,
  REMOVE: 0
};
