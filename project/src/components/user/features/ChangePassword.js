import React, {useState} from 'react'
import { useFormik } from 'formik'
import PassSchema from '../../../schemas/PasswordSchema'
import axios from 'axios'
import {API} from '../../../util/API'

const ChangePassword = () => {
    let [check, setCheck] = useState()
    let passForm = useFormik({
        validationSchema : PassSchema,
        initialValues : {
            current_pass : "",
            new_pass : "",
            conf_pass : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API}/profile/changepassword`, formdata, {
                headers : { Authorization : localStorage.getItem("token")}
            }).then(response=>{
                if(response.data.success==true)
                {
                    setCheck(true)
                }
                else{
                    setCheck(false);
                }
            })
        }
    })
  return (
    <div className="container my-4" style={{minHeight : "650px"}}>
        <form onSubmit={passForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4 className='text-center'>Change Your Password</h4>
                <div className='my-3'>
                    <label>Current Password</label>
                    <input name='current_pass' onChange={passForm.handleChange} type='password' className='form-control' />
                    {
                        passForm.errors.current_pass && passForm.touched.current_pass ? <small className='text-danger'>{passForm.errors.current_pass}</small> : ''
                    }
                </div>
                <div className='my-3'>
                    <label>New Password</label>
                    <input name='new_pass' onChange={passForm.handleChange} type='password' className='form-control' />
                    {
                        passForm.errors.new_pass && passForm.touched.new_pass ? <small className='text-danger'>{passForm.errors.new_pass}</small> : ''
                    }
                </div>
                <div className='my-3'>
                    <label>Confirm New Password</label>
                    <input name='conf_pass' onChange={passForm.handleChange} type='password' className='form-control' />
                    {
                        passForm.errors.conf_pass && passForm.touched.conf_pass ? <small className='text-danger'>{passForm.errors.conf_pass}</small> : ''
                    }
                </div>
                <br />
                <button type='submit' className='btn btn-primary m-0'>Update Password</button>
                <br />
                {
                    check == false ? <div className='alert alert-danger mt-4'>
                    Your Current Password is Wrong !!!
                </div> : ''
                }
                {
                    check == true ? <div className='alert alert-success mt-4'>
                    Your Password has been changed !!!
                </div> : ''
                }
            </div>
        </div>
        </form>
    </div>
  )
}

export default ChangePassword