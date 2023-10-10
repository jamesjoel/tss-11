import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");

  return(
    <Navigate to="/login" />
  )
}

export default Logout