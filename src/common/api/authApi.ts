'use client'

import {
  ForgotPasswordArgs,
  ForgotPasswordData,
  SignUpData,
  SignUpDataSuccess,
} from '@/common/api/auth.types'
import { baseApi, baseApiAuthAndGithub } from '@/common/api/baseApi'

export const authApi2 = baseApi.injectEndpoints({
  endpoints: build => ({
    registration: build.mutation<SignUpDataSuccess, SignUpData>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: '/users/registration',
        }
      },
    }),
  }),
})

export const { useRegistrationMutation } = authApi2

export const authAndGithubApi = baseApiAuthAndGithub.injectEndpoints({
  endpoints: build => ({
    recoveryRequest: build.mutation<any, ForgotPasswordArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: '/api/v1/auth/password-reset/request',
        }
      },
    }),

    // gitAuth: build.query<string, void>({
    //   query: () => {
    //     return {
    //       url: '/api/v1/auth/github/',
    //       mode: 'no-cors',
    //     }
    //   }
    // }),
    getGithubAuthUrl: build.query<string, void>({
      query: () => '/api/v1/auth/github', // Этот эндпоинт возвращает URL для редиректа
    }),

    exchangeGithubCode: build.mutation<string, { code: string }>({
      query: ({ code }) => ({
        url: '/api/v1/auth/github/callback',
        method: 'POST',
        body: { code },
      }),
    }),
  }),
})

export const { useRecoveryRequestMutation, useGetGithubAuthUrlQuery, useExchangeGithubCodeMutation } = authAndGithubApi
