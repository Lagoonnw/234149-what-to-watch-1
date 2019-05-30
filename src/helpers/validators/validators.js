export const validator = {
  email: (value) => (value.includes(`@`)),
  required: (value) => Boolean(value)
};

