import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MyWishList from './components/MyWishList'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='wishlist' element={<MyWishList />} />
        </Routes>
    </>
  )
}

export default AllRoutes