import {makeObjectWithKeysFromArray} from './make-object-keys-from-array';

describe(`Constructor for object from array of keys test`, () => {
  test(`Should return object with keys from array of strings`, () => {
    expect(makeObjectWithKeysFromArray([`email`, `password`], true)).toEqual({
      email: true,
      password: true
    });
  });
  test(`Should return object with keys from array of strings with no default value`, () => {
    expect(makeObjectWithKeysFromArray([`email`, `password`])).toEqual({
      email: null,
      password: null
    });
  });
});

