import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userSlice } from "./userSlice";
import { alertsSlice } from "./alertsSlice";
 
//combine reducers
const rootReducer = combineReducers({
    alerts: alertsSlice.reducer,
    user: userSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})