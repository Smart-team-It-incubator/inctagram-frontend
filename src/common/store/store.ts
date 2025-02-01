
import { baseApi, baseApiAuthAndGithub } from '@/common/api/baseApi'
import {configureStore, ThunkAction} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {authReducers, authSlice} from "@/common/store/slices/authSlice";
import { AnyAction } from "redux"

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware, baseApiAuthAndGithub.middleware),
    reducer: {
        [authSlice.reducerPath]: authReducers,
        [baseApi.reducerPath]: baseApi.reducer,
        [baseApiAuthAndGithub.reducerPath]: baseApiAuthAndGithub.reducer,
    },
})


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
export type AppRootStateType = ReturnType<typeof authReducers>

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector