import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  
  let x = useSelector(state=>state);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container">
    <NavLink className="navbar-brand" to="">{x}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user">User</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pagination">Pagination</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/online-test">Online Test</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/student">Student</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header