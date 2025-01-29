
import { baseApi, baseApiAuthAndGithub } from '@/common/api/baseApi'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authReducers, authSlice } from './slices'

// import { addPhotoReducers, authReducers } from '@/entities'
// import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, baseApiAuthAndGithub.middleware),
  reducer: {
    [authSlice.reducerPath]: authReducers,
    [baseApi.reducerPath]: baseApi.reducer,
    [baseApiAuthAndGithub.reducerPath]: baseApiAuthAndGithub.reducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
