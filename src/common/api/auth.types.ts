export type SignUpData = {
  email: string
  password: string
  username: string
}
export type SignUpDataSuccess = {
  city: null | string
  country: null | string
  dateOfBirthday: null | string
  email: string
  firstName: null | string
  id: string
  lastName: null | string
  username: string
}

export type ErrorResponse = {
  error: {
    data: {
      message: string
      statusCode: number
    }
    status: number
  }
  meta: any
}

export type ForgotPasswordArgs = {
  email: string
}

export type ForgotPasswordData = {
  message: string
}
