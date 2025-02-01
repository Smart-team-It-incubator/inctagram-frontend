import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import {baseApiAuthAndGithub} from "@/common/api/baseApi";

type AuthStateType = {
    isAuth: boolean
    showLogoutModal: boolean,
    email: string | null
}

const initialState: AuthStateType = {
    isAuth: false,
    showLogoutModal: true,
    email: null
}




const logout = createAsyncThunk<{ isLoggedIn: boolean }, void>("auth/logout", async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    const res = await baseApiAuthAndGithub.logout;
        if (res.data.resultCode === ResultCode.Success) {
            dispatch(clearTasksAndTodolists());
            return {isLoggedIn: false};
        }
    });
});

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

//   selectors: {
//     isAuthSelector: state => state.isAuth,
//     showLogoutModal: state => state.showLogoutModal,
//   },

})

export const authActions = authSlice.actions
export const authReducers = authSlice.reducer
// export const authSelectors = authSlice.selectors

// export const selectIsAuth = (state: RootState) => state.authSlice.isAuth