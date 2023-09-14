import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const StudentLayout = () => {
  return (
    <>
        <div className='container-fluid bg-danger'>
            <div className="container">
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/student/add">Add</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/student/view">View</NavLink>
                </li>
                
            </ul>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default StudentLayout