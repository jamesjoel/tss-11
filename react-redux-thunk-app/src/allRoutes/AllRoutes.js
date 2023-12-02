import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/feature/Home'
import Teacher from '../components/feature/Teacher'
import TeacherList from '../components/feature/TeacherList'
import User from '../components/feature/User'
import UserAdd from '../components/feature/UserAdd'
import Student from '../components/feature/Student'
import StudentAdd from '../components/feature/StudentAdd'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='teacher' element={<Teacher />} />
        <Route path='teacherlist' element={<TeacherList />} />
        <Route path='user' element={<User />} />
        <Route path='user/add' element={<UserAdd />} />
        <Route path='user/update/:id' element={<UserAdd />} />
        <Route path='student' element={<Student />} />
        <Route path='student/add' element={<StudentAdd />} />
        <Route path='student/update/:id' element={<StudentAdd />} />
    </Routes>
  )
}

export default AllRoutes