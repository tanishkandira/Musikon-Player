import React, { useState } from 'react';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import toast from 'react-hot-toast';


function Register(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    //Register Button Function
    const register = async ()=>{
        // console.log(user)
        //try-catch

        try{
            dispatch(ShowLoading())
            const response = await axios.post("/api/users/register", user)
            dispatch(HideLoading())
            if(response.data.success){
                toast.success("User Registered successfully!")
                navigate("/login")
            }
            else{
                toast.error(response.data.message)
            }
        }catch(error){
            toast.error("Something went wrong")
            dispatch(HideLoading())
            console.log(error)
        }
    }
    return(
        <div className='min-h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-3 w-96 p-5 shadow border border-gray-300'>
                <h1 className='text-3xl font-bold text-gray-700'>Welcome to Musikon!</h1>
                <hr/>
                {/* Name Field */}
                <input type='text' placeholder='Name'
                value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})}/>
                {/* Email Field */}
                <input type='text' placeholder='Email'
                value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
                {/* Password Field */}
                <input type='password' placeholder='Password'
                value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
                {/* Register Button */}
                <button className='primary' onClick={register}>Register</button>
                {/* Link */}
                <Link to="/login" className='text-gray-600 underline text-center'>Click Here To Login🎶</Link> 
            </div>
        </div>
    )
}
export default Register