import {convertObjectKeysToCamel} from "./convert-object-keys-to-camel-case";

test(`Should convert snake-case to camelCase`, () => {
  /* eslint-disable camelcase */
  expect(convertObjectKeysToCamel({
    property_one: `test`,
    property_two: `test`})).toEqual({
    propertyOne: `test`,
    propertyTwo: `test`
  });
});
