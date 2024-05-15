"use client"

import authSlice from "@/features/Auth/authSlice"
import { combineReducers } from "@reduxjs/toolkit"



const rootReducer = combineReducers({
    auth: authSlice
}
)
export default rootReducer

