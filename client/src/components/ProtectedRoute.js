import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { ShowLoading, HideLoading} from '../redux/alertsSlice';
import DefaultLayout from './DefaultLayout';


function ProtectedRoute({children}){
    const {user} = useSelector(state => state.user) //redux state
    const navigate = useNavigate()
    const [readyToRender,setReadyToRender] = useState(false)
    const dispatch = useDispatch()
    // const [userData,setUserData] = useState(null)

    const getUserData= async()=>{
        try{
            dispatch(ShowLoading()) //Show loading component
            const response = await axios.post('/api/users/get-user-data', {},{ //get user's data
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}` //set the authorization error
                }
            })
            dispatch(HideLoading()) //Hide loading component
            if(response.data.success){
                // setUserData(response.data.data)
                dispatch(setUser(response.data.data))
            }else{
                alert(response.data.message)
            }
            setReadyToRender(true)
        }
        catch(error){
            dispatch(HideLoading()) //Hide loading component
            localStorage.removeItem("token") //remove the token from local storage if any error
            setReadyToRender(true)
            navigate("/login") //navigate to login if unsuccessful login
        }
    }
    useEffect(()=>{
        if(user === null){ //fetch only the data when user is null
            getUserData()
        }
    })

    return(
        <div>
            {readyToRender && <DefaultLayout>{children}</DefaultLayout>}
        </div>
    )
}

export default ProtectedRoute