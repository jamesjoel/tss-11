import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as YUP from 'yup'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

let schema = YUP.object({
    name : YUP.string().required("Insert Name"),
    email : YUP.string().required("Insert Email"),
    age : YUP.string().required("Insert Age"),
    contact : YUP.string().required("Insert Contact"),
})

const UserAdd = () => {
    let navigate = useNavigate();
    let param = useParams();

    let [user, setUser] = useState({
        name : "",
        age : "",
        email : "",
        contact : ""
    })

    useEffect(()=>{
        if(param.id){
            axios.get("http://localhost:8080/user/"+param.id).then(response=>{
                // console.log(response.data);
                setUser(response.data);
            })
        }
    },[])

    let userFrm = useFormik({
        enableReinitialize : true,
        initialValues : user,
        validationSchema : schema,
        onSubmit : (formdata)=>{
            if(param.id){
                axios.put("http://localhost:8080/user/"+param.id, formdata).then(response=>{
                    navigate("/user");
                })
            }else{

                axios.post("http://localhost:8080/user", formdata).then(response=>{
                    navigate("/user");
                })
            }
        }
    })

  return (
    <div className="container my-4">
        <form onSubmit={userFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className='my-3'>
                    <label>Full Name</label>
                    <input type='text' value={userFrm.values.name} name='name' onChange={userFrm.handleChange} className={'form-control '+ (userFrm.errors.name && userFrm.touched.name ? 'is-invalid' : '')} />
                </div>
                <div className='my-3'>
                    <label>Email</label>
                    <input type='text' value={userFrm.values.email} name='email' onChange={userFrm.handleChange} className={'form-control '+ (userFrm.errors.email && userFrm.touched.email ? 'is-invalid' : '')} />
                </div>
                <div className='my-3'>
                    <label>Age</label>
                    <input type='text' value={userFrm.values.age} name='age' onChange={userFrm.handleChange} className={'form-control '+ (userFrm.errors.age && userFrm.touched.age ? 'is-invalid' : '')} />
                </div>
                <div className='my-3'>
                    <label>Contact</label>
                    <input type='text' value={userFrm.values.contact} name='contact' onChange={userFrm.handleChange} className={'form-control '+ (userFrm.errors.contact && userFrm.touched.contact ? 'is-invalid' : '')} />
                </div>
                <br />
                <button type='submit'  className='btn btn-primary'>{param.id ? 'Update' : 'Add'}</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default UserAdd