import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {API} from '../../../util/API';

const MyProfile = () => {

    let [user, setUser] = useState({});
    
    useEffect(()=>{
        axios.get(`${API}/users/info`, {
            headers : { Authorization : localStorage.getItem("token") }
            }
        ).then(response=>{
            // console.log(response.data);
            setUser(response.data.result);
        })
    }, [])

  return (
    <div className="container" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-10 offset-md-1 my-5">
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <img src='/assets/img/avatar.png' className='img-thumbnail'/>
                                    </div>
                                    <div className='col-md-7'>
                                    <small>Hello,</small>
                                        <h6>{ localStorage.getItem("name") }</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='card p-4' style={{minHeight : "300px"}}>
                            <h5>Personal Information</h5>
                            
                            <div className='p-3'>
                                <strong>Full Name</strong>
                                <p className='px-3'>{user.name}</p>
                                <strong>Email</strong>
                                <p className='px-3'>{user.email}</p>
                                <strong>Address</strong>
                                <p className='px-3'>{user.address}</p>
                                <strong>Contact</strong>
                                <p className='px-3'>{user.contact}</p>
                                <strong>Gender</strong>
                                <p className='px-3'>{user.gender}</p>
                                <strong>State</strong>
                                <p className='px-3'>{user.state}</p>
                                <strong>City</strong>
                                <p className='px-3'>{user.city}</p>
                                <NavLink to="/account/update" className='btn btn-info btn-sm'>Edit Information</NavLink>
                                <NavLink to="/account/change-password" className='btn btn-danger btn-sm mx-2'>Change Password</NavLink>                             
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile