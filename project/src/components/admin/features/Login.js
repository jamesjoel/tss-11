import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { API } from '../../../util/API'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isAdminLoggedIn } from '../../../redux/AdminMenuBarSlice'

const Login = () => {
    let navigate = useNavigate();
    let disp = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem("nimda"))
        {
            navigate("/admin/dashboard");
        }
    },[])

    let [resObj, setResObj] = useState({});

    let loginFrm = useFormik({
        initialValues : {
            username : "",
            password : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API}/adminauth`, formdata).then(response=>{
                setResObj(response.data);
                //console.log(response.data);
                if(response.data.success==true)
                {
                    disp(isAdminLoggedIn())
                    localStorage.setItem("nimda", response.data.token);
                    navigate("/admin/dashboard");
                }
            })
        }
    })
  return (
    <>
        <div className="container" style={{minHeight : "600px"}}>
            <form onSubmit={loginFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card my-5">
                        <div className="card-header">
                            <h4>Administrator Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-3">
                                <label>Username</label>
                                <input type='text' name='username' onChange={loginFrm.handleChange} className='form-control' />
                            </div>
                            <div className="my-3">
                                <label>Password</label>
                                <input type='password' name='password' onChange={loginFrm.handleChange} className='form-control' />
                            </div>
                        </div>
                        <div className='card-footer'>
                            <input type='submit' className='btn btn-success' value="Login" />
                        </div>
                    </div>

                    {
                        resObj.success == false && resObj.type == 1 ? <div className='alert alert-danger'>This Username and Password is Incorrect !</div> : ''
                    }
                    {
                        resObj.success == false && resObj.type == 2 ? <div className='alert alert-danger'>This Password is Incorrect !</div> : ''
                    }
                </div>
            </div>
            </form>
        </div>
    </>
  )
}

export default Login