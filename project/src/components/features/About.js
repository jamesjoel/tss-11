import React from 'react'
import { useFormik } from 'formik'
import * as YUP from 'yup';
import './Style.css';

const mySchema = YUP.object({
  name : YUP.string().required("Insert Your Name"),
  address : YUP.string().required("Insert Your address"),
  city : YUP.string().required("Insert Your city"),
  gender : YUP.string().required("Insert Your gender")
})

const About = () => {

  let myForm = useFormik({
    validationSchema : mySchema,
    initialValues : {
      name : "",
      address : "",
      city : "",
      gender : ""
    },
    onSubmit : (data)=>{
      console.log(data);
    }
  })

  return (
    <>
      <div className="container" style={{minHeight : "600px"}}>
        <form onSubmit={myForm.handleSubmit} >
        <div className="row">
          <div className="col-md-6 offset-md-3 my-3">
              <div className='my-2'>
                <label>Name</label>
                <input type='text' name='name' onChange={myForm.handleChange} className={'form-control '+(myForm.errors.name && myForm.touched.name ? 'is-invalid' : '')} />
                {
                  myForm.errors.name && myForm.touched.name ? <small className='text-danger'>{myForm.errors.name}</small> : ''
                }
              </div>
              <div className='my-2'>
                <label>Address</label>
                <textarea name='address' onChange={myForm.handleChange} className={'form-control '+(myForm.errors.address && myForm.touched.address ? 'is-invalid' : '')} ></textarea>
                {
                  myForm.errors.address && myForm.touched.address ? <small className='text-danger'>{myForm.errors.address}</small> : ''
                }
              </div>
              <div className='my-2'>
                <label>Gender</label>
                <br />
                <div className="form-check">
                    <label htmlFor='male'>Male</label>
                    <input id='male' type="radio" className={'form-check-input '+(myForm.errors.gender && myForm.touched.gender ? 'is-invalid-radio' : '')} onChange={myForm.handleChange} name="gender" value="male" />
                    
                    
                </div>
                <div className="form-check">
                    <label htmlFor='female'>Female</label> 
                    <input id='female' type="radio" className={'form-check-input '+(myForm.errors.gender && myForm.touched.gender ? 'is-invalid-radio' : '')} onChange={myForm.handleChange} name="gender" value="female" />
                </div>
                
                {
                  myForm.errors.gender && myForm.touched.gender ? <small className='text-danger'>{myForm.errors.gender}</small> : ''
                }
              </div>
              <div className='my-2'>
                <label>City</label>
                <select className={'form-control '+(myForm.errors.city && myForm.touched.city ? 'is-invalid' : '')} name='city' onChange={myForm.handleChange}>
                  <option>Select</option>
                  <option>Indore</option>
                  <option>Mumbai</option>
                </select>
                {
                  myForm.errors.city && myForm.touched.city ? <small className='text-danger'>{myForm.errors.city}</small> : ''
                }
                <br />
                <br />
                <div className='d-grid'>
                <button type='submit' className='btn btn-primary'>Add</button>
                </div>
              </div>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default About