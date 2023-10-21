import React, {useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/user/shared/Header'
import Footer from '../components/user/shared/Footer'


const AccountContainer = () => {
  let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("token"))
        {
            navigate("/login");
        }
    },[])

  return (
    <>
        <Header />
          <Outlet />
        <Footer />
    </>
  )
}

export default AccountContainer