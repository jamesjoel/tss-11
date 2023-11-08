import React, {useEffect} from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

const UserModule = () => {
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("token"))
    {
      navigate("/login");
    }
  }, [])
  return (
  <>
    <Header />
    <div className='container-fluid bg-danger'>
      <ul className='nav'>
        <li className='nav-item'>
          <NavLink className="nav-link text-light" to="/user">Profile</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link text-light" to="/user/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
        <div className='container my-5' style={{minHeight : "700px"}}>
          <Outlet />
        </div>
    <Footer />
  </>
  )
}

export default UserModule