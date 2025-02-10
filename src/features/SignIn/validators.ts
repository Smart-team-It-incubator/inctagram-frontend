export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    message: 'The email or password are incorrect. Try again please',
  },
}

export const passwordValidation = {
  required: 'Password is required',
}
