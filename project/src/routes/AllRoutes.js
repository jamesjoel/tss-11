import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/features/Home';
import About from '../components/features/About';
import Signup from '../components/features/Signup';
import Demo from '../components/features/Demo';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='signup' element={<Signup />} />
        <Route path='demo' element={<Demo />} />
    </Routes>
  )
}

export default AllRoutes