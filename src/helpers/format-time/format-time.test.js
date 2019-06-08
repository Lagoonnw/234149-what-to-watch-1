import {formatTime} from './format-time';

describe(`Format time helper test`, () => {
  test(`Should format 800 seconds to '00:13:20'`, () => {
    expect(formatTime(800)).toEqual(`00:13:20`);
    expect(formatTime(`800`)).toEqual(`00:13:20`);
  });
});
