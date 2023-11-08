import React from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'
const HomeModule = () => {
  return (
    <>
        <Header />
        <div className='container my-5' style={{minHeight : "700px"}}>
          <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default HomeModule