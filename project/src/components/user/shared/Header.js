import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Category from './Category';
import axios from 'axios';
import {API} from '../../../util/API';


const Header = () => {

    let [allCate, setAllCate] = useState([]);
    let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("token")){
            setIsUserLoggedIn(true);
        }
    },[])



    useEffect(()=>{

        axios.get(`${API}/category`).then(response=>{
            setAllCate(response.data);
        })

    }, [])



  return (
    <div className="container-fluid sticky-top" style={{backgroundColor : "#90BC79"}}>
        <div className='container-fluid'>
            <ul className='nav justify-content-end'>
                {
                    isUserLoggedIn ? 
                    <>
                        <li className='nav-item'>
                            <NavLink className="nav-link text-dark" to="/">My-Account</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link text-dark" to="/logout">Logout</NavLink>
                        </li>
                    </>
                    :
                    <>
                    <li className='nav-item'>
                        <NavLink className="nav-link text-dark" to="/login">Login</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link text-dark" to="/signup">Signup</NavLink>
                    </li>
                    </>
                }
                
                
            </ul>
        </div>
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
                        
                        <NavLink to="/demo" className="nav-item nav-link">Demo</NavLink>
                        
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</a>
                            <div className="dropdown-menu bg-light mt-2">
                                
                                {
                                    allCate.map((value, index)=>{
                                        return(
                                            <Category key={value._id} cate={value}/>
                                        )
                                    })
                                }
                                
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