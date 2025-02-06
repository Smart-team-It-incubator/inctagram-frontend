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
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
