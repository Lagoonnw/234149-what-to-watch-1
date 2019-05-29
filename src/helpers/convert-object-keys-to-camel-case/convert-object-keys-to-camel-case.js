export const convertObjectKeysToCamel = (obj) => {
  if (typeof obj !== `object`) {
    throw Error(`Should be object type`);
  }
  let key;
  let newKey;
  let value;
  const newObj = {};

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newKey = (key.replace(/(\_\w)/g, (k) => k[1].toUpperCase())).toString();
      value = obj[key];
      newObj[newKey] = value;
    }
  }

  return newObj;
};
