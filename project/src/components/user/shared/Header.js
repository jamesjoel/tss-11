import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Category from './Category';
import axios from 'axios';
import {API} from '../../../util/API';
import { useSelector, useDispatch } from 'react-redux'
import { isLoggedIn } from '../../../redux/MenuBarSlice'
import { addToCartServer } from '../../../redux/CartSlice'



const Header = () => {
    let dispatch = useDispatch();
    
    let check = useSelector(state=>state.MenuBarSlice);
    
    dispatch(addToCartServer());
    let cart = useSelector(state=>state.CartSlice);

    let [allCate, setAllCate] = useState([]);
    let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    useEffect(()=>{

        if(localStorage.getItem("token")){
            dispatch(isLoggedIn());
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
                    check ? 
                    <>
                        <li className='nav-item dropdown'>
                        <a href="#" className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown"><strong>{localStorage.getItem("name")}</strong></a>
                        <div className="dropdown-menu bg-light mt-2">
                            
                            <NavLink to='/account/my-account' className='dropdown-item'>My Account</NavLink>
                            <NavLink to='/account/my-profile' className='dropdown-item'>My Profile</NavLink>
                            {/* <a href='' className='dropdown-item'>My Orderes</a> */}
                            <NavLink to='/logout' className='dropdown-item'>Logout</NavLink>
                        </div>
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
                    <NavLink to="/mycart" className="btn btn-dark py-2 px-4 d-none d-lg-inline-block">My Cart ({cart.length})</NavLink>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header