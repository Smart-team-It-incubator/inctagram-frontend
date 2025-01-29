import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type AuthStateType = {
  isAuth: boolean
  showLogoutModal: boolean
}

const initialState: AuthStateType = {
  isAuth: false,
  showLogoutModal: false,
}

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },

    setShowLogoutModal: (state, action: PayloadAction<boolean>) => {
      state.showLogoutModal = action.payload
    },
  },

  selectors: {
    isAuthSelector: state => state.isAuth,
    showLogoutModal: state => state.showLogoutModal,
  },
  
})

export const authActions = authSlice.actions
export const authReducers = authSlice.reducer

// export const selectIsAuth = (state: RootState) => state.authSlice.isAuth

