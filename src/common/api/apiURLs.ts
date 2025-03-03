export const API_URLS = {
  BASE_URL: 'https://inctagram.work',
  AUTH: {
    REGISTRATION: 'api/v1/auth/registration',
    REGISTRATION_CONFIRMATION: 'api/v1/auth/registration-confirmation',
    RESEND_CONFIRMATION_CODE: 'api/v1/auth/registration-email-resending',
    LOGIN: 'api/v1/auth/login',
    LOGOUT: 'api/v1/auth/logout',
    AUTH_ME:'/api/v1/auth/me',
    RECOVERY_REQUEST: '/api/v1/auth/password-recovery',
    RECOVERY_CONFIRM: '/api/v1/auth/password-recovery-resending',
    NEW_PASSWORD: '/api/v1/auth/new-password',
    TERMS: '/api/v1/auth/terms',
    PRIVATE: '/api/v1/auth/private',
    REFRESH_TOKEN: '/api/v1/auth/refresh-token',
  },
  USER: {
    GET_ALL_USERS: '/users',
    GET_PUBLIC_PROFILE_BY_USERNAME: '/users/get-public-profile/',
  },
  POST: {
    CREATE_POST: '/posts',
  },
}
