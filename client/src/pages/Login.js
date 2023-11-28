import React, { useState } from 'react';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import toast from 'react-hot-toast';


function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    //Login Button Function
    const login = async ()=>{
        // console.log(user)
        //try-catch

        try{
            dispatch(ShowLoading())
            const response = await axios.post("/api/users/login", user)
            dispatch(HideLoading())
            if(response.data.success){
                localStorage.setItem("token", response.data.data) //Set the token in localStorage
                // alert("User Logged in successfully!")
                navigate("/") //Navigate to the home page
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
                <h1 className='text-3xl font-bold text-gray-700'>Welcome Back!</h1>
                <hr/>
                {/* Email Field */}
                <input type='text' placeholder='Email'
                value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
                {/* Password Field */}
                <input type='password' placeholder='Password'
                value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
                {/* Login Button */}
                <button className='primary' onClick={login}>Login</button>
                {/* Link */}
                <Link to="/register" className='text-gray-600 underline text-center'>Click Here To Register🎵</Link> 
            </div>
        </div>
    )
}
export default Login