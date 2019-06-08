import {Raiting} from '../../constants/constants';

export const convertReviewRaiting = (mark) => {
  mark = (typeof mark === `string`) ? parseInt(mark, 10) : mark;

  if (mark === 10) {
    return Raiting.AWESOME;
  }
  if (mark >= 0 && mark < 3) {
    return Raiting.BAD;
  }
  if (mark >= 3 && mark < 5) {
    return Raiting.NORMAL;
  }
  if (mark >= 5 && mark < 8) {
    return Raiting.GOOD;
  }

  return Raiting.VERY_GOOD;
};
