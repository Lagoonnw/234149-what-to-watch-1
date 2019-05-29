import {createAction} from './create-action';

describe(`Create action helper test`, () => {
  test(`Should return action object with payload`, () => {
    const expectedAction = {
      type: `MOCK`,
      payload: {}
    };
    expect(createAction(`MOCK`, {})).toEqual(expectedAction);
  });
  test(`Should return action object with no payload`, () => {
    const expectedAction = {
      type: `MOCK`,
    };
    expect(createAction(`MOCK`)).toEqual(expectedAction);
  });
});
