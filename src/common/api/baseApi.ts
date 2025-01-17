'use client'

import { ErrorResponse } from '@/common/api/auth.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
      prepareHeaders: () => {},
    })(args, api, extraOptions)

    console.log('result:', result)

    if (result.error) {
      const error = result as ErrorResponse

      switch (error.error.status) {
        case 409:
          console.log('409 Conflict:', error.error.data.message)
          break

        default:
          console.log('Some error occurred:', error.error.data.message || 'Unknown error')
          break
      }
    }

    return result
  },
  endpoints: () => ({}),
  reducerPath: 'auth',
  tagTypes: ['auth'],
})
