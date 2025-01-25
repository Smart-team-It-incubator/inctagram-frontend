'use client'

import {
  ForgotPasswordArgs,
  RecoveryConfirmArgs,
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
    recoveryConfirm: build.mutation<any, RecoveryConfirmArgs>({
      query: data => {
        return {
          body: data,
          method: 'POST',
          url: '/api/v1/auth/password-reset/confirm',
        }
      },
    }),
  }),
})

export const { useRecoveryRequestMutation, useRecoveryConfirmMutation } = authAndGithubApi
