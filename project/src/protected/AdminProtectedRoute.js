import React, {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminProtectedRoute = () => {

    let navigate = useNavigate();

    useEffect(()=>{
        if(! localStorage.getItem("nimda"))
        {
            navigate("/");
        }
    }, [])

  return (
    <>
        
        
        <Outlet />
    </>
  )
}

export default AdminProtectedRoute