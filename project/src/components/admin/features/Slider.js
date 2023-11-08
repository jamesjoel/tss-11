import React, {useRef} from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {API} from '../../../util/API'
import { useNavigate } from 'react-router-dom'

const Slider = () => {
  let file = useRef();
  let navigate = useNavigate();
  let sliderFrm = useFormik({
    initialValues : {
      caption : "",
      image : ""
    },
    onSubmit : (formdata)=>{
      //console.log(file.current.files[0]);
      let image = file.current.files[0];
      let myform = new FormData();
      myform.append("image", image);
      myform.append("caption", formdata.caption);

      
      axios.post(`${API}/slider`, myform).then(response=>{
          navigate("/admin/dashboard");
      })
    }
  });
  return (
    <div className="container my-5">
      <form onSubmit={sliderFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h4>Home Page Slider Image</h4>
            <div className='row'>
              <div className='col-md-6 offset-md-3'>
                <div className='my-2'>
                  <label>Select Image</label>
                  <input ref={file} name='image' onChange={sliderFrm.handleChange} type='file' className='form-control'/>
                </div>
                <div className='my-2'>
                  <label>Caption</label>
                  <input name='caption' onChange={sliderFrm.handleChange} type='text' className='form-control'/>
                </div>
                <br />
                <button type='submit' className='btn btn-sm btn-primary m-0'>Add</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Slider