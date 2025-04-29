export type SignUpArgs = {
    email: string
    password: string
    userName: string
}
export type User = {
    city: null | string
    country: null | string
    dateOfBirthday: null | string
    email: string
    firstName: null | string
    id: string
    lastName: null | string
    username: string
    profileImageUrl: string
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
    recaptcha: string
    baseUrl: string
}

export type RecoveryConfirmArgs = {
    recoveryCode: string | null
    newPassword: string
}

export type FormFields = keyof SignUpArgs

export type EmailConfirmationArgs = {
    confirmationCode: string
}

export type ResendConfirmCodeArgs = {
    email: string
}

export type BaseResponse = {
    statusCode: number,
    messages: [
        {
            message: string,
            field: string
        }
    ],
    error?: string
}

export type AuthMe = {
    userId: number
    userName: string
    email: string
    isBlocked: boolean
}