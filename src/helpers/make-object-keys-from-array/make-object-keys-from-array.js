export const makeObjectWithKeysFromArray = (keys, defaultValue = null) => {
  return keys.reduce((obj, key) => {
    obj = Object.assign({}, obj, {
      [key]: defaultValue
    });

    return obj;
  }, {});
};
