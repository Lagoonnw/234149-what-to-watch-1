import {limitArray} from './limit-array';

const createMockArray = (length) => {
  const mockArray = [];
  for (let i = 0; i <= length; i++) {
    mockArray.push(i);
  }
  return mockArray;
};

test(`Should limit array`, () => {
  expect(limitArray(createMockArray(48), 1).length).toEqual(20);
  expect(limitArray(createMockArray(48), 2).length).toEqual(40);
  expect(limitArray(createMockArray(48), 3).length).toEqual(49);
  expect(limitArray([], 1).length).toEqual(0);
  expect(limitArray(createMockArray(8), 1).length).toEqual(9);
});
