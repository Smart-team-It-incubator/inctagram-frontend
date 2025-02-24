'use client'

import {
    BaseResponse,
    EmailConfirmationArgs,
    ForgotPasswordArgs,
    RecoveryConfirmArgs,
    ResendConfirmCodeArgs,
    SignUpArgs,
    User,
} from '@/common/api/auth.types'
import {baseApi, baseApiAuthAndGithub} from '@/common/api/baseApi'
import {API_URLS} from '@/common/api/apiURLs'

export const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        registration: build.mutation<User, SignUpArgs>({
            query: data => {
                console.log('registration', data)
                return {
                    body: data,
                    method: 'POST',
                    url: API_URLS.AUTH.REGISTRATION,
                }
            },
        }),
        registrationConfirmation: build.mutation<BaseResponse | null, EmailConfirmationArgs>({
            query: data => {
                return {
                    body: data,
                    method: 'POST',
                    url: API_URLS.AUTH.REGISTRATION_CONFIRMATION,
                }
            },
        }),
        resendConfirmationCode: build.mutation<any, ResendConfirmCodeArgs>({
            query: data => {
                return {
                    body: data,
                    method: 'POST',
                    url: API_URLS.AUTH.RESEND_CONFIRMATION_CODE,
                }
            },
        }),
    }),
})

export const {
    useRegistrationMutation,
    useResendConfirmationCodeMutation,
    useRegistrationConfirmationMutation,
} = authApi

export const authAndGithubApi = baseApiAuthAndGithub.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<{ accessToken: string }, { email: string; password: string }>({
            query: data => ({
                url: API_URLS.AUTH.LOGIN,
                method: 'POST',
                body: data,
            }),
        }),

        logout: build.mutation<void, void>({
            query: () => ({
                url: API_URLS.AUTH.LOGOUT,
                method: 'POST',
            }),
        }),
        recoveryRequest: build.mutation<any, ForgotPasswordArgs>({
            query: data => {
                return {
                    body: data,
                    method: 'POST',
                    url: API_URLS.AUTH.RECOVERY_REQUEST,
                }
            },
        }),

        recoveryConfirm: build.mutation<any, RecoveryConfirmArgs>({
            query: data => {
                return {
                    body: data,
                    method: 'POST',
                    url: API_URLS.AUTH.NEW_PASSWORD,
                }
            },
        }),
    }),
})

export const {
    useLoginMutation,
    useRecoveryRequestMutation,
    useRecoveryConfirmMutation,
    useLogoutMutation,
} = authAndGithubApi
