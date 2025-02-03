export const API_URLS = {
    BASE_URL: 'https://smart-reg.org.ru/api/v1',
    AUTH: {
        REGISTRATION: '/users/registration',
        EMAIL_CONFIRMATION: '/users/emailConfirmation?code=',
        RESEND_CONFIRMATION_CODE: '/users/resendConfirmationCode',
        LOGIN: '/api/v1/auth/login',
        LOGOUT: '/api/v1/auth/logout',
        RECOVERY_REQUEST: '/api/v1/auth/password-reset/request',
        RECOVERY_CONFIRM: '/api/v1/auth/password-reset/confirm',
        TERMS: '/api/v1/auth/terms',
        PRIVATE: '/api/v1/auth/private',
        REFRESH_TOKEN: '/api/v1/auth/refresh-token',
    },
    USER:{
        GET_ALL_USERS: '/users',
    }
}