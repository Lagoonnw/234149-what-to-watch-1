import {Raiting} from '../../constants/constants';

export const convertReviewRaiting = (raiting) => {
  const mark = (typeof raiting === `string`) ? parseInt(raiting, 10) : raiting;

  if (mark === 10) {
    return Raiting.AWESOME;
  }
  switch (mark) {
    case (mark >= 0 && mark < 3):
      return Raiting.BAD;
    case (mark >= 3 && mark < 5):
      return Raiting.NORMAL;
    case (mark >= 5 && mark < 8):
      return Raiting.GOOD;
    default:
      return Raiting.VERY_GOOD;
  }
};
