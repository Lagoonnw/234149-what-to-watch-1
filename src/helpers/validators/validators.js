export const validator = {
  email: (value) => (value.includes(`@`)),
  required: (value) => value && value.length > 0,
  minMax: (value, {min, max}) => (min <= value && value <= max),
};

