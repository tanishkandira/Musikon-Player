import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '../redux/userSlice';
  
const SongsList = ()=>{
    const {allSongs, currentSong} = useSelector(state=>state.user)
    const dispatch = useDispatch()
    
    return(
        <div className='flex flex-col gap-5'>
            <input type='text' placeholder='Song, Artist, Album' className='rounded w-full'/>
            {allSongs.map((song, index)=>{
                const isPlaying = currentSong?._id === song._id
                return (
                <div className={`p-2 flex items-center justify-between cursor-pointer ${isPlaying && `shadow border border-gray-300 rounded-lg`}`}
                onClick={()=>{
                    dispatch(setCurrentSong(song))
                }}>
                    <div>
                        <h1>{song.title}</h1>
                        <h1>{song.artist} {song.album} {song.year}</h1>
                    </div>
                    <div>
                        <h1>{song.duration}</h1>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default SongsList