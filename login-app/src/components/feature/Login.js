import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as YUP from 'yup'
import axios from 'axios'
import { API } from '../../util/API';
import { useNavigate } from 'react-router-dom'

let LoginSchema = YUP.object({
  email : YUP.string().email("Email Err").required("Insert Err"),
  password : YUP.string().required("Insert Err")
})

const Login = () => {
  let navigate = useNavigate();
  let [loader, setLoader] = useState(false);
  let [msg, setMsg] = useState("");
  let loginFrm = useFormik({
    validationSchema : LoginSchema,
    initialValues : {
      email : "",
      password : ""
    },
    onSubmit : (formdata)=>{
      setLoader(true);
      axios.post(`${API}/user/auth`, formdata).then(response=>{
        setLoader(false);
        if(response.data.success==true)
        {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", response.data.name);
            navigate("/user");

        }
        else{
          if(response.data.type==1)
          {
              setMsg("This Email and Password is Incorrect")
          }
          if(response.data.type==2)
          {
            setMsg("This Password is Incorrect")
          }
        }
      })
    }
  })

  return (
    <div className='row'>
      <form onSubmit={loginFrm.handleSubmit}>
      <div className='col-md-6 offset-md-3'>
        <div className='my-3'>
          <label>Username/Email</label>
          <input onChange={loginFrm.handleChange} name='email' type='text' className='form-control' />
          {
            loginFrm.errors.email && loginFrm.touched.email ? <small className='text-danger'>{loginFrm.errors.email}</small> : ''
          }
        </div>
        <div className='my-3'>
          <label>Password</label>
          <input onChange={loginFrm.handleChange} name='password' type='password' className='form-control' />
          {
            loginFrm.errors.password && loginFrm.touched.password ? <small className='text-danger'>{loginFrm.errors.password}</small> : ''
          }
        </div>
        <br />
        <button type='submit' className='btn btn-primary'>Login { loader ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
        
        {
          msg ? <div className='alert alert-danger my-3'>
                  {msg}
                </div> 
              : 
                ''
        }
        
      </div>
      </form>
    </div>
  )
}

export default Login