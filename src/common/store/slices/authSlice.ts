import {createSlice, PayloadAction} from '@reduxjs/toolkit'



type AuthStateType = {
    isAuth: boolean
    showLogoutModal: boolean,
    email: string | null
    setIsAuth: boolean
}

const initialState: AuthStateType = {
    isAuth: false,
    showLogoutModal: true,
    email: null,
    setIsAuth: true
}



export const authSlice = createSlice({
    initialState,
    name: 'authSlice',
    reducers: {
        setShowLogoutModal: (state, action: PayloadAction<boolean>) => {
            state.showLogoutModal = action.payload
        },
    },
})

export const authActions = authSlice.actions
export const authReducers = authSlice.reducer