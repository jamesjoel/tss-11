import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/user/features/Home';
import About from '../components/user/features/About';
import Signup from '../components/user/features/Signup';
import Demo from '../components/user/features/Demo';
import UserContainer from '../containers/UserContainer';
import AdminContainer from '../containers/AdminContainer';

import Dashboard from '../components/admin/features/Dashboard'
import Setting from '../components/admin/features/Setting'
import Category from '../components/admin/features/Category';
import CategoryList from '../components/admin/features/CategoryList';
import Product from '../components/admin/features/Product';
import ProductList from '../components/admin/features/ProductList';
import Login from '../components/user/features/Login';
import AdminLogin from '../components/admin/features/Login'
import AdminLogout from '../components/admin/features/Logout'
import Logout from '../components/user/features/Logout';
import MyAccount from '../components/user/features/MyAccount';
import AdminProtectedRoute from '../protected/AdminProtectedRoute';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<UserContainer />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='signup' element={<Signup />} />
          <Route path='demo' element={<Demo />} />
          <Route path='my-account' element={<MyAccount />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route path='admin' element={<AdminContainer />}>
            <Route path='' element={<AdminLogin />} />
            <Route path='' element={<AdminProtectedRoute />} >
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='category' element={<Category />} />
                <Route path='category/list' element={<CategoryList />} />
                <Route path='product' element={<Product />} />
                <Route path='product/list' element={<ProductList />} />

                <Route path='setting' element={<Setting />} />
                <Route path='logout' element={<AdminLogout />} />
            </Route>
        </Route>
    </Routes>
  )
}

export default AllRoutes