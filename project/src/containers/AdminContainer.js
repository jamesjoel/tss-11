import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/admin/shared/Header'
import Footer from '../components/admin/shared/Footer'
const AdminContainer = () => {
  return (
    <>
        <Header />
        <div className="container" style={{minHeight : "650px"}}>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default AdminContainer