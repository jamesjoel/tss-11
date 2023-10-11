import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("nimda");
  return (
    <Navigate to="/" />
  )
}

export default Logout