export const validator = {
  email: (value) => (value.includes(`@`)),
  required: (value) => value && value.length > 0
};

