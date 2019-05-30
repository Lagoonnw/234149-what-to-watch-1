import {validator} from './validators';

describe(`Validator test`, () => {
  test(`Should validate required fields values correctly`, () => {
    expect(validator.required(`test`)).toBeTruthy();
    expect(validator.required(1234)).toBeTruthy();
    expect(validator.required(``)).toBeFalsy();
    expect(validator.required(null)).toBeFalsy();
  });
  test(`Should validate email field value correctly`, () => {
    expect(validator.email(`test@test.com`)).toBeTruthy();
    expect(validator.email(`test`)).toBeFalsy();
  });
});
