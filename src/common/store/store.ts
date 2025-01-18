import { baseApi, baseApiAuthAndGithub } from '@/common/api/baseApi'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, baseApiAuthAndGithub.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApiAuthAndGithub.reducerPath]: baseApiAuthAndGithub.reducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
