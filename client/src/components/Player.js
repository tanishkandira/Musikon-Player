import React, { useState } from 'react';
import wave from '../assets/wave.png'
import { useSelector } from 'react-redux';
const Player = ()=>{
    const [isPlaying,setIsPlaying] = useState(false)
    const audioRef = React.createRef()
    const {currentSong} = useSelector(state=> state.user)

    const onPlay = ()=>{
        audioRef.current.play()
        setIsPlaying(true)
    }
    const onPause = ()=>{
        audioRef.current.pause()
        setIsPlaying(false)
    }
    return(
        <div className='absolute bottom-0 left-0 right-0 p-5 shadow-lg bg-gray-200 border'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={wave} className='p-0 h-14 w-30' alt=''/>
                    <div>
                        <h1>{currentSong?.title}</h1>
                        <h1>{currentSong?.artist}, {currentSong?.album}, {currentSong?.year}</h1>
                    </div>
                </div>
                <div>
                    <audio src={currentSong?.src} controls ref={audioRef}/>
                    <div className='flex gap-3'>
                        <i class="ri-skip-back-line text-4xl"></i>
                        {isPlaying?<i className="ri-pause-line text-4xl" onClick={onPause}/>
                        :<i className="ri-play-line text-4xl" onClick={onPlay}/>}
                        <i class="ri-skip-forward-line text-4xl"></i>
                    </div>
                </div>

                <div>
                    <h1>Controls</h1>
                </div>
            </div>
        </div>
    )
}

export default Player