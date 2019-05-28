import {objectKeysConverter} from "./convert-object-keys-to-camel-case";

test(`Should convert snake-case to camelCase`, () => {
  expect(objectKeysConverter({
    property_one: `test`,
    property_two: `test`})).toEqual({
    propertyOne: `test`,
    propertyTwo: `test`
  });
});
