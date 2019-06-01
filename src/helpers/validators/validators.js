export const validator = {
  email: (value) => (value.includes(`@`)),
  required: (value) => (typeof value === `number`) ? Boolean(String(value)) : Boolean(value)
};

