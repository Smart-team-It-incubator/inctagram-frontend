'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Для методов auth и github в https://smart-reg.org.ru/api/v1/swagger#/ базовый url https://auth.smart-reg.org.ru,
// для всех остальных https:/smart-reg.org.ru

export const baseApi = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      // baseUrl: 'https://smart-reg.org.ru/api/v1',
      prepareHeaders: (headers ) => {
        headers.set('Content-Type', 'application/json')
        return headers
      },
    })(args, api, extraOptions)

    return result
  },
  endpoints: () => ({}),
  reducerPath: 'auth',
  tagTypes: ['auth'],
})

export const baseApiAuthAndGithub = createApi({
  reducerPath: 'authAndGithub',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://auth.smart-reg.org.ru',
    credentials: 'include',
    prepareHeaders: (headers ) => {
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
})
