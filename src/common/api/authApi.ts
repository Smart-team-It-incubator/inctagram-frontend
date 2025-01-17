'use client'

import { SignUpData, SignUpDataSuccess } from '@/common/api/auth.types'
import { baseApi } from '@/common/api/baseApi'
import { instanceAuthAndGithub } from '@/common/instance/instance'

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

export const authApi = {
  sendingMail(email: string) {
    return instanceAuthAndGithub.post('/api/v1/auth/password-reset/request', { email: email })
  },
}
