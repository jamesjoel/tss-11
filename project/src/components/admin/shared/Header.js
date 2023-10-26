import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/admin">Administrator</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      {
        localStorage.getItem("nimda") ? <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/dashboard">Dashboard</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/admin/category">Category</NavLink>
          <div className='dropdown-menu'>
            <NavLink className="dropdown-item" to="/admin/category">Add</NavLink>
            <NavLink className="dropdown-item" to="/admin/category/list">List</NavLink>
          </div>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/admin/product">Product</NavLink>
          <div className='dropdown-menu'>
            <NavLink className="dropdown-item" to="/admin/product">Add</NavLink>
            <NavLink className="dropdown-item" to="/admin/product/list">List</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/setting">Setting</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/users">Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/student">Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/student-list">Student List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/logout">Logout</NavLink>
        </li>
        
      </ul> : ''
      }
    </div>
  </div>
</nav>
  )
}

export default Header