import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PublicRoute({children}){
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("token")){
            navigate("/") //navigate to home if token exists
        }

    })
    return(
        <div>
            {children}
        </div>
    )
}

export default PublicRoute