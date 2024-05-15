import {createSlice} from '@reduxjs/toolkit'
import {  registerUsers } from './authAction'

type initialStateProps = {
    isLoading: boolean;
    isLoggedIn: boolean
    content: {
      message: string;
      user: {
        email: string;
        name: string;
        role: string;
        id: string;
      };
    }
    signup: any
    error: object | null;
  };

  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    isLoggedIn: false,
    content: {
      message: '',
      user: {
        email: '',
        name: '',
        role: '',
        id: '',
      },
    },
    signup: {}

  };

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(loginUsers.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(loginUsers.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isLoggedIn=true
        //     // console.log(action.payload)
        //     state.content = action.payload
        // })
        // builder.addCase(loginUsers.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.error
        // })
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.signup = action.payload
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.signup = {}
            state.error = action.error
        })
    }
})

export default authSlice.reducer