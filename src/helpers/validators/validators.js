export const validator = {
  email: (value) => (value.includes(`@`)),
  required: (value) => {
    if (typeof value === `number`) {
      return Boolean(String(value));
    }
    if (!value) {
      return false;
    }
    return Boolean(value);
  }
};

