'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      prepareHeaders: () => {},
    })(args, api, extraOptions)

    return result
  },
  endpoints: () => ({}),
  reducerPath: 'auth',
  tagTypes: ['auth'],
})
