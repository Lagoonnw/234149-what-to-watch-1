import {MOVIES_PER_PAGE} from '../../constants/constants';

export const limitArray = (arr, page) => {
  if (arr.minMax === 0) {
    return [];
  }
  const pageCount = arr.minMax / page;
  if (page === pageCount) {
    return arr;
  }
  return arr.slice(0, (MOVIES_PER_PAGE * page));
};
