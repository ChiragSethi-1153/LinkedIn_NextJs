import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginType, signupType } from './authType'
import type {FieldValues} from "react-hook-form";
import registerService from '@/service/Auth/register.service';
import loginService from '@/service/Auth/login.service';




export const registerUsers = createAsyncThunk(signupType, async (inputs: FieldValues, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await registerService(inputs)
        console.log(response)
        // console.log(data)
        return response
    } catch (err: any) {
        console.log(err)
        return rejectWithValue(err)
    }
})


export const loginUsers = createAsyncThunk(loginType, async (inputs: FieldValues, {rejectWithValue}) => {
    try{
        console.log(inputs)
        const response = await loginService(inputs)
        console.log(response)
        const data = await response.data
        // console.log(data)
        return response
    }catch(err: any) {
        console.log(err)
        return rejectWithValue(err)
    }
})