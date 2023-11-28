import {createSlice} from "@reduxjs/toolkit"


export const alertsSlice = createSlice({
    name: 'alerts', //name
    initialState: { //initial state
        loading: false
    },
    reducers: { //reducers to change the state 
        ShowLoading: (state)=>{
            state.loading = true
        }, 
        HideLoading: (state)=>{
            state.loading = false
        }
    }
})

export const {ShowLoading, HideLoading} = alertsSlice.actions