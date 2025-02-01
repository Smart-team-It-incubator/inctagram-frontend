'use client'

import {
  BaseResponse,
  EmailConfirmationArgs,
  ForgotPasswordArgs,
  RecoveryConfirmArgs,
  ResendConfirmCodeArgs,
  SignUpArgs,
  SignUpDataSuccess,
} from '@/common/api/auth.types'
import { baseApi, baseApiAuthAndGithub } from '@/common/api/baseApi'
import {API_URLS} from '@/common/api/apiURLs';




export const authApi2 = baseApi.injectEndpoints({
  endpoints: build => ({
    registration: build.mutation<SignUpDataSuccess, SignUpArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url:API_URLS.AUTH.REGISTRATION
        }
      },
    }),
    emailConfirmation: build.mutation<BaseResponse, EmailConfirmationArgs>({

      query: data => {
        return {
          body: data,
          method: 'POST',
          url:`${API_URLS.AUTH.EMAIL_CONFIRMATION}${data.code}`
        }
      },
    }),
    resendConfirmationCode: build.mutation<BaseResponse, ResendConfirmCodeArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: API_URLS.AUTH.RESEND_CONFIRMATION_CODE
        }
      },
    }),
  }),
})

export const {
  useRegistrationMutation,
  useResendConfirmationCodeMutation,
  useEmailConfirmationMutation,
} = authApi2

export const authAndGithubApi = baseApiAuthAndGithub.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<{ accessToken: string }, { email: string; password: string }>({
      query: data => ({
        url:API_URLS.AUTH.LOGIN,
        method: 'POST',
        body: data,
      }),
    }),

    logout: build.mutation<void, void>({
       query: () => ({
           url: API_URLS.AUTH.LOGOUT,
           method: 'POST'
       })
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
          url: API_URLS.AUTH.RECOVERY_CONFIRM,
        }
      },
    }),
    terms: build.query<string, void>({
      query: () => {
        return {
          method: 'GET',
          url:API_URLS.AUTH.TERMS,
          responseHandler: response => response.text(),
        }
      },
    }),
    private: build.query<string, void>({
      query: () => {
        return {
          method: 'GET',
          url: API_URLS.AUTH.PRIVATE,
          responseHandler: response => response.text(),
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useRecoveryRequestMutation,
  useRecoveryConfirmMutation,
  useTermsQuery,
  usePrivateQuery,
} = authAndGithubApi
