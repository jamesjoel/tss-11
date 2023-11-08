import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeModule from '../moduels/HomeModule'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import Login from '../components/feature/Login'
import UserModule from '../moduels/UserModule'
import Profile from '../components/feature/Profile'
import Logout from '../components/feature/Logout'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<HomeModule />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
        </Route>
        <Route path='user' element={<UserModule />}>
            <Route path='' element={<Profile />} />
            <Route path='logout' element={<Logout />} />
        </Route>
    </Routes>
  )
}

export default AllRoutes