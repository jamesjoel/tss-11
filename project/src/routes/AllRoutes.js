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
import Users from '../components/admin/features/Users';
import ProductByCategory from '../components/user/features/ProductByCategory';
import AccountContainer from '../containers/AccountContainer';
import MyProfile from '../components/user/features/MyProfile';
import EditProfile from '../components/user/features/EditProfile';
import Student from '../components/admin/features/Student';
import StudentList from '../components/admin/features/StudentList';
import Slider from '../components/admin/features/Slider';
import ChangePassword from '../components/user/features/ChangePassword';
import MyCart from '../components/user/features/MyCart';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<UserContainer />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='mycart' element={<MyCart />} />
          <Route path='signup' element={<Signup />} />
          <Route path='demo' element={<Demo />} />
          
          <Route path='login' element={<Login />} />
          <Route path='category/:catename' element={<ProductByCategory />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route path='account' element={<AccountContainer />}>
          <Route path='my-account' element={<MyAccount />} />
          <Route path='change-password' element={<ChangePassword />} />
          <Route path='update' element={<EditProfile />} />
          <Route path='my-profile' element={<MyProfile />} />
        </Route>
        <Route path='admin' element={<AdminContainer />}>
            <Route path='' element={<AdminLogin />} />
            <Route path='' element={<AdminProtectedRoute />} >
                <Route path='slider' element={<Slider />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='category' element={<Category />} />
                <Route path='edit-category/:id' element={<Category />} />
                <Route path='category/list' element={<CategoryList />} />
                <Route path='product' element={<Product />} />
                <Route path='product/list' element={<ProductList />} />

                <Route path='users' element={<Users />} />
                <Route path='setting' element={<Setting />} />
                <Route path='student' element={<Student />} />
                <Route path='student-list' element={<StudentList />} />
                <Route path='logout' element={<AdminLogout />} />
            </Route>
        </Route>
    </Routes>
  )
}

export default AllRoutes