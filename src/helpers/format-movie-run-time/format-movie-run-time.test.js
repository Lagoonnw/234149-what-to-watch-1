import {formatMovieRunTime} from './format-movie-run-time';

test(`Should return run time in '{number}h {number}m' format`, () => {
  expect(formatMovieRunTime(90)).toEqual(`1h 30m`);
  expect(formatMovieRunTime(125)).toEqual(`2h 5m`);
  expect(formatMovieRunTime(`26`)).toEqual(`0h 26m`);
});
