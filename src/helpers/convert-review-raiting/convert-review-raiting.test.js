import {convertReviewRaiting} from './convert-review-raiting';

test(`Shoul return string rating`, () => {
  expect(convertReviewRaiting(10)).toEqual(`Awesome`);
  expect(convertReviewRaiting(9.4)).toEqual(`Very good`);
  expect(convertReviewRaiting(6.7)).toEqual(`Good`);
  expect(convertReviewRaiting(4.9)).toEqual(`Normal`);
  expect(convertReviewRaiting(2)).toEqual(`Bad`);
});
