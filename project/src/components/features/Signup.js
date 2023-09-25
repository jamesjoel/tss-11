import React from 'react'
import { useFormik } from 'formik'
import * as YUP from 'yup';

const signupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name"),
    email : YUP.string().required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password"),
    repassword : YUP.string().required("Insert Your Re-Password"),
    contact : YUP.string().required("Insert Your Contact Number"),
    address : YUP.string().required("Insert Your Full Address"),
    city : YUP.string().required("Select Your City"),
    gender : YUP.string().required("Select Your Gender"),
})


const Signup = () => {

    let signupFrm = useFormik({
        validationSchema : signupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repassword : "",
            contact : "",
            address : "",
            city : "",
            gender : ""
            },
        onSubmit : (formData)=>{
            console.log(formData);
        }
    });

  return (
    <>
    <div className="container my-5" style={{minHeight : "600px"}}>
        <form onSubmit={signupFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h4 className='text-light'>Registration</h4>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Full Name</label>
                            <input type='text' onChange={signupFrm.handleChange} name='name'  className={'form-control ' + (signupFrm.errors.name && signupFrm.touched.name ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.name && signupFrm.touched.name ? <small className='text-danger'>{signupFrm.errors.name}</small> : ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Email</label>
                            <input type='text' onChange={signupFrm.handleChange} name='email' className={'form-control ' + (signupFrm.errors.email && signupFrm.touched.email ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.email && signupFrm.touched.email ? <small className='text-danger'>{signupFrm.errors.email}</small> : ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Password</label>
                            <input type='password' onChange={signupFrm.handleChange} name='password' className={'form-control ' + (signupFrm.errors.password && signupFrm.touched.password ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.password && signupFrm.touched.password ? <small className='text-danger'>{signupFrm.errors.password}</small> : ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Re-Password</label>
                            <input type='password' onChange={signupFrm.handleChange} name='repassword' className={'form-control ' + (signupFrm.errors.repassword && signupFrm.touched.repassword ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.repassword && signupFrm.touched.repassword ? <small className='text-danger'>{signupFrm.errors.repassword}</small> : ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Address</label>
                            <textarea name='address' onChange={signupFrm.handleChange} className={'form-control ' + (signupFrm.errors.address && signupFrm.touched.address ? 'is-invalid' : '')}></textarea>
                            {
                                signupFrm.errors.address && signupFrm.touched.address ? <small className='text-danger'>{signupFrm.errors.address}</small> : ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Contact</label>
                            <input type='text' onChange={signupFrm.handleChange} name='contact'  className={'form-control ' + (signupFrm.errors.contact && signupFrm.touched.contact ? 'is-invalid' : '')} />
                            {
                                signupFrm.errors.contact && signupFrm.touched.contact ? <small className='text-danger'>{signupFrm.errors.contact}</small> : ''
                            }
                        </div>
                        <div className="my-2">
                            <label>City</label>
                            <select name='city' onChange={signupFrm.handleChange} className={'form-control ' + (signupFrm.errors.city && signupFrm.touched.city ? 'is-invalid' : '')}>
                                <option>Select</option>
                                <option>Indore</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                            </select>
                            {
                                signupFrm.errors.city && signupFrm.touched.city ? <small className='text-danger'>{signupFrm.errors.city}</small> : ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Gender</label>
                            <br />
                            Male <input type='radio' name='gender' value="male" onChange={signupFrm.handleChange} />
                            Female <input type='radio' name='gender' value="female" onChange={signupFrm.handleChange} />
                            <br />
                            {
                                signupFrm.errors.gender && signupFrm.touched.gender ? <small className='text-danger'>{signupFrm.errors.gender}</small> : ''
                            }
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-primary'>Signup</button>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Signup