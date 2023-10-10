import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik'
import loginSchema from '../../../schemas/LoginSchema';
import axios from 'axios'
import {API} from '../../../util/API'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("token"))
    {
      navigate("/")
    }
  }, [])



  let [resObj, setResObj] = useState({});
  let loginFrm = useFormik({
    validationSchema : loginSchema,
    initialValues : {
      username : "",
      password : ""
    },
    onSubmit : (formdata)=>{
        axios.post(`${API}/user/auth`, formdata).then(response=>{
          //console.log(response.data);
          if(response.data.success==true)
          { 
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("email", response.data.email);
            navigate("/");
          }
          setResObj(response.data);

        })
    }
  })

  return (
    <>
      <div className='container' style={{minHeight : "600px"}}>
        <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <h4 className='text-center'>User Login</h4>
            <div className='my-4'>
              <label>Username</label>
              <input name='username' onChange={loginFrm.handleChange} type='text' className={'form-control '+(loginFrm.errors.username && loginFrm.touched.username ? 'is-invalid' : '')} />
              {
                loginFrm.errors.username && loginFrm.touched.username ? <small className='text-danger'>{loginFrm.errors.username}</small> : ''
              }
            </div>
            <div className='my-4'>
              <label>Password</label>
              <input name='password' onChange={loginFrm.handleChange} type='password' className={'form-control ' + (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} />
              {
                loginFrm.errors.password && loginFrm.touched.password ? <small className='text-danger'>{loginFrm.errors.password}</small> : ''
              }
            </div>
            <br />
            <button type='submit' className='btn btn-primary'>Login</button>
            {
              resObj.success == false && resObj.type == 1 ? <div className='alert alert-danger mt-4'>Username/Email or Password is Incorrect !</div> : ''
            }
            {
              resObj.success == false && resObj.type == 2 ? <div className='alert alert-danger mt-4'>This Password is Incorrect !</div> : ''
            }
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default Login