import {validator} from './validators';

describe(`Validator test`, () => {
  test(`Should validate required fields values correctly`, () => {
    expect(validator.required(`test`)).toBeTruthy();
    expect(validator.required(1234)).toBeFalsy();
    expect(validator.required(0)).toBeFalsy();
    expect(validator.required(true)).toBeFalsy();
    expect(validator.required(``)).toBeFalsy();
    expect(validator.required(false)).toBeFalsy();
    expect(validator.required(null)).toBeFalsy();
    expect(validator.required(undefined)).toBeFalsy();
  });
  test(`Should validate email field value correctly`, () => {
    expect(validator.email(`test@test.com`)).toBeTruthy();
    expect(validator.email(`test`)).toBeFalsy();
  });
});
