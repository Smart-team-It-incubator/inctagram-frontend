'use client'

import {
  BaseResponse, EmailConfirmationArgs,
  ForgotPasswordArgs,
  RecoveryConfirmArgs, ResendConfirmCodeArgs,
  SignUpArgs,
  SignUpDataSuccess,
} from '@/common/api/auth.types'
import { baseApi, baseApiAuthAndGithub } from '@/common/api/baseApi'

export const authApi2 = baseApi.injectEndpoints({
  endpoints: build => ({
    registration: build.mutation<SignUpDataSuccess, SignUpArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: '/users/registration',
        }
      },
    }),
    emailConfirmation: build.mutation<BaseResponse, EmailConfirmationArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: `/users/emailConfirmation?code=${data.code}`,
        }
      },
    }),
    resendConfirmationCode: build.mutation<BaseResponse, ResendConfirmCodeArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: '/users/resendConfirmationCode',
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
    recoveryConfirm: build.mutation<any, RecoveryConfirmArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: '/api/v1/auth/password-reset/confirm',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      },
    }),
  }),
})

export const { useRecoveryRequestMutation, useRecoveryConfirmMutation } = authAndGithubApi
