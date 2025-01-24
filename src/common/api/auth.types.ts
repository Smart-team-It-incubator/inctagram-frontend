export type SignUpArgs = {
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
      field: string
      message: string
      path: string
      statusCode: number
      timestamp: string
    }
    status: number
  }
  meta?: any
}

export type ForgotPasswordArgs = {
  email: string
}

export type RecoveryConfirmArgs = {
  recoveryCode: string | null
  newPassword: string
}

export type FormFields = keyof SignUpArgs

export type EmailConfirmationArgs = {
  code: string
}

export type ResendConfirmCodeArgs = {
  email: string
}

export type BaseResponse = {
  message: string
  statusCode?: number
}