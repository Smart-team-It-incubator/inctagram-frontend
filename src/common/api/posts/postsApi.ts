import { baseApi } from '@/common/api/baseApi'
import { API_URLS } from '@/common/api/apiURLs'

export const postApi = baseApi.injectEndpoints({
  endpoints: build => ({
    createPost: build.mutation<any, any>({
      query: data => {
        const formData = new FormData()

        formData.append('text', data.text)
        formData.append('location', data.location)

        if (data.files?.[0]) {
          formData.append('files', data.files[0])
        }
        return {
          body: formData,
          method: 'POST',
          url: API_URLS.POST.CREATE_POST,
        }
      },
    }),
  }),
})

export const { useCreatePostMutation } = postApi
