export const validationRules = {
  email: {
    pattern: { message: 'The email must match the format example@example.com', value: /@/ },
    required: {
      message: 'This field is required',
      value: true,
    },
  },
  password: {
    minLength: {
      message: 'Minimum number of characters 6',
      value: 6,
    },
    pattern: {
      message: 'error',
      value: /^[0-9A-Za-z!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/,
    },
    required: {
      message: 'This field is required',
      value: true,
    },
  },
  username: {
    maxLength: {
      message: 'Maximum number of characters 30',
      value: 30,
    },
    minLength: { message: 'Minimum number of characters 6', value: 6 },
    required: 'This field is required',
  },
}
