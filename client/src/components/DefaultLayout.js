import React from 'react';
import { useSelector } from 'react-redux';

const DefaultLayout = ({children})=>{
    const {user} = useSelector(state => state.user)
    
    return(
        <div className='main'>
            <div className='header flex justify-between p-5 shadow items-center'>
                <h1 className='flex text-2xl text-gray-700 font-bold items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 4.58146V11.9999C15 13.6568 13.6569 14.9999 12 14.9999C10.3431 14.9999 9 13.6568 9 11.9999C9 10.3431 10.3431 8.99994 12 8.99994C12.3506 8.99994 12.6872 9.0601 13 9.17065V2.04932C18.0533 2.55104 22 6.81459 22 11.9999C22 17.5228 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932V4.06184C7.05369 4.55393 4 7.92032 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C16.4183 19.9999 20 16.4182 20 11.9999C20 8.64256 17.9318 5.76823 15 4.58146Z" fill="rgba(71,39,114,1)"></path></svg>
                    MUSIKON-PLAYER
                </h1>
                <div className='flex items-center gap-2'>
                    <h1 className='text-xl '>{user?.name.toUpperCase()}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={()=>{
                        localStorage.removeItem("token")
                        window.location.reload()
                    }} height="20" width="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z" fill="rgba(43,52,116,1)"></path></svg>
                    {/* <i class="ri-logout-circle-r-line"></i> */}
                </div>
            </div>
            <div className='content m-10'>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout