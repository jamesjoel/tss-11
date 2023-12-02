import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    
    let stu = useSelector(state=>state.StudentSlice);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/teacher">Teacher</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/teacherlist">Teacher-List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user">User</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/student">Student ({stu.length})</NavLink>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header