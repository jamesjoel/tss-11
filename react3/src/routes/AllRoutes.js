import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import About from '../components/feature/About'
import Contact from '../components/feature/Contact'
import StudentLayout from '../layoute/StudentLayout'
import Add from '../components/feature/student/Add'
import View from '../components/feature/student/View'
import OnlineTest from '../components/feature/OnlineTest'
import User from '../components/feature/User'
import UserInfo from '../components/feature/UserInfo'
import Pagination from '../components/feature/Pagination'
const AllRoutes = () => {
  return (
    <>
        <Routes>
              <Route path='' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='pagination' element={<Pagination />} />
              <Route path='user' element={<User />} />
              <Route path='userinfo/:id' element={<UserInfo />} />
              <Route path='online-test' element={<OnlineTest />} />
              <Route path='student' element={<StudentLayout />}>
                <Route path='add' element={<Add />} />
                <Route path='view' element={<View />} />
              </Route>
          </Routes>
    </>
  )
}

export default AllRoutes