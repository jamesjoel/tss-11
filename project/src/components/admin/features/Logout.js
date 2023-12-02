import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isAdminLoggedOut } from '../../../redux/AdminMenuBarSlice'

const Logout = () => {
  let disp = useDispatch();
  disp(isAdminLoggedOut());
    localStorage.removeItem("nimda");
  return (
    <Navigate to="/" />
  )
}

export default Logout