import {createSlice} from '@reduxjs/toolkit'
import {  registerUsers } from './authAction'

type initialStateProps = {
    isLoading: boolean,
    signup: any
    error: object | null;
  };

  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    signup: {}

  };

export const registerSlice = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {
      clearSignupData: (state, action) => {
        state.signup = {}
    }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.signup = action.payload
            state.error = null
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.signup = {}
            state.error = action.error
        })
    }
})
export const { clearSignupData } = registerSlice.actions;
export default registerSlice.reducer