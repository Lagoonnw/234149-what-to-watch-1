import {sortArray} from './sort-array';

describe(`Sort array test`, () => {
  test(`Should sort array from max date to min date`, () => {
    const dateArr = [{date: `2018-06-08T13:25:17.586Z`}, {date: `2019-06-08T13:25:17.586Z`}];
    const expectedArr = [{date: `2019-06-08T13:25:17.586Z`}, {date: `2018-06-08T13:25:17.586Z`}];
    expect(sortArray.byDate(dateArr)).toEqual(expectedArr);
  });
  test(`Should return [1,3,5] from [1,2,3,4,5,6]`, () => {
    expect(sortArray.byOddIndex([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  });
  test(`Should return [2,4,6] from [1,2,3,4,5,6]`, () => {
    expect(sortArray.byEvenIndex([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});
