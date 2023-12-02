import React from 'react'
import Header from './components/shared/Header'
import AllRoutes from './allRoutes/AllRoutes'
import { useDispatch } from 'react-redux'
import { getAll } from './redux/TeacherSlice'
import { getAllStudent } from './redux/StudentSlice'

const App = () => {

  let disp = useDispatch();
  disp(getAll());
  disp(getAllStudent())

  return (
    <>
      <Header />
      <AllRoutes />
    </>

  )
}

export default App