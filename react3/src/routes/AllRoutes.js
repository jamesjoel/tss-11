import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import Contact from '../components/feature/Contact'
import StudentLayout from '../layoute/StudentLayout'
import Add from '../components/feature/student/Add'
import View from '../components/feature/student/View'
const AllRoutes = () => {
  return (
    <>
        <Routes>
              <Route path='' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='student' element={<StudentLayout />}>
                <Route path='add' element={<Add />} />
                <Route path='view' element={<View />} />
              </Route>
          </Routes>
    </>
  )
}

export default AllRoutes