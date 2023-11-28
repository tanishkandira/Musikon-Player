import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';

import { setAllSongs } from '../redux/userSlice';
import SongsList from '../components/SongsList';
import Playlists from '../components/Playlists';
import Player from '../components/Player';

function Home(){
    // const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const getAllSongs = async() => {
        try{
            const response = await axios.post("/api/songs/get-all-songs", {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            dispatch(setAllSongs(response.data.data))
            
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getAllSongs()
    })
    return(
        <div className='flex gap-5'>
            <div className='w-1/2'>
                <SongsList/>
            </div>
            <div>
                <Playlists/>
            </div>
            <div>
                <Player/>
            </div>
        </div>
    )
}

export default Home