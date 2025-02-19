'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: 'https://smart-reg.org.ru/api/v1',
      prepareHeaders: headers => {
        headers.set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)

        // в Хедерс будет добавл 'application/json', если работаем НЕ с FormData
        // для запроса createPost body возвращаем как FormData, у него не должно быть 'Content-Type', 'application/json'
        if (!(args.body instanceof FormData)) {
          headers.set('Content-Type', 'application/json')
        }

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
    baseUrl: 'https://inctagram.work/',
    credentials: 'include',

    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
})
