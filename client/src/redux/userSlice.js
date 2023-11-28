import {createSlice} from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: 'alerts',
    initialState: {
        user: null,
        allSongs: [],
        currentSong: null,
        currentSongIndex: 0
    },
    reducers: {
        setUser: (state,action)=>{ //set user to payload
            state.user = action.payload
        },
        setAllSongs: (state,action)=>{
            state.allSongs = action.payload
        },
        setCurrentSong: (state,action)=>{
            state.currentSong = action.payload
        }
    }
})

export const {setUser, setAllSongs, setCurrentSong} = userSlice.actions