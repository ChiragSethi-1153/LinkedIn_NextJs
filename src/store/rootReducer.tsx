"use client"

import authSlice from "@/features/Auth/authSlice"
import registerSlice from "@/features/Auth/registerSlice"
import { combineReducers } from "@reduxjs/toolkit"



const rootReducer = combineReducers({
    auth: authSlice,
    register: registerSlice
}
)
export default rootReducer

