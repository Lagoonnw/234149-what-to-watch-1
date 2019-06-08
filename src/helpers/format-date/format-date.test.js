import {formatDate} from './format-date';

test(`Shoul return object with dates in two format: comprehensible and localFormat`, () => {
  expect(formatDate(`2018-06-08T13:25:17.586Z`)).toEqual({
    comprehensible: `June 8, 2018`,
    localFormat: `6/8/2018`
  });
});
