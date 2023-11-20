import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  let data = useSelector(state=>state);
  return (
    <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <div className="container-fluid">
            
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/wishlist">My WishList({data.length})</NavLink>
                </li>
                
            </ul>
            </div>

            </nav>
    </>
  )
}

export default Header