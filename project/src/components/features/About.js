import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as YUP from 'yup';

const mySchema = YUP.object({
    name : YUP.string().required("Insert Your Name"),
    age : YUP.string().required("Insert Your Age")
});


const About = () => {
  
  let myForm = useFormik({
    validationSchema : mySchema,
    initialValues : {
      name : "",
      age : ""
    },
    onSubmit : (formData)=>{
      console.log(formData)
    }
  })

  return (
    <>
    <div className="container-fluid py-5" style={{minHeight : "700px"}}>
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">About</span> Us</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, optio, dolores voluptas autem voluptatum voluptates recusandae quisquam est hic, quidem officiis voluptatibus molestias praesentium nemo necessitatibus tempora nostrum excepturi nesciunt? consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
        </div>
    </div>
    <div className="container">
      <div className="row">
          <form onSubmit={myForm.handleSubmit}>
            <div className="col-md-6 border border-dark">
              <div className='my-2'>
                <label>Name</label>
                <input type='text' name='name' onChange={myForm.handleChange} className={'form-control '+ (myForm.errors.name && myForm.touched.name ? 'is-invalid' : '')} />
                {
                  myForm.errors.name && myForm.touched.name ? <small className='text-danger'>{myForm.errors.name}</small> : ''
                }
              </div>
              <div className='my-2'>
                <label>Age</label>
                <input type='text' name='age' onChange={myForm.handleChange} className={'form-control ' + (myForm.errors.age && myForm.touched.age ? 'is-invalid' : '')} />
                {
                  myForm.errors.age && myForm.touched.age ? <small className='text-danger'>{myForm.errors.age}</small> : ''
                }
              </div>
            <br />
            <button type='submit' className='btn btn-primary'>Add</button>
            </div>
          </form>     
      </div>
    </div>
    </>

  )
}

export default About