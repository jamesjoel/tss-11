import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container-fluid sticky-top" style={{backgroundColor : "#90BC79"}}>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <NavLink to="/" className="navbar-brand">
                    <h2 className="text-white">ToyWorld</h2>
                </NavLink>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Shop By Category</a>
                            <div className="dropdown-menu bg-light mt-2">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="how-to-use.html" className="dropdown-item">How To Use</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="blog.html" className="dropdown-item">Blog Articles</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        
                    </div>
                    <a href="" className="btn btn-dark py-2 px-4 d-none d-lg-inline-block">My Cart (0)</a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header