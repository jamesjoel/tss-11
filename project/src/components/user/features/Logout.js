import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { isLoggedOut } from '../../../redux/MenuBarSlice'

const Logout = () => {
  let dispatch= useDispatch();
  dispatch(isLoggedOut());
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");

  
  return(
    <Navigate to="/login" />
  )
}

export default Logout