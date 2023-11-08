import React, {useState, useEffect} from 'react'
import {API} from '../../../util/API'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import {useFormik} from 'formik'

const Category = () => {

  let [cate, setCate] = useState({  name : "" });
  let param = useParams();
  let navigate = useNavigate()

  useEffect(()=>{
    if(param.id){
      axios.get(`${API}/category/${param.id}`).then(response=>{
        
        setCate(response.data);
      })
    }
  },[])

  let cateForm = useFormik({
    enableReinitialize : true,
    initialValues : cate,
    onSubmit : (formdata)=>{
      if(param.id){
        axios.put(`${API}/category/${param.id}`, formdata).then(response=>{
          navigate("/admin/category/list");
        })
      }else{

        axios.post(`${API}/category`, formdata).then(response=>{
          navigate("/admin/category/list");
        })
      }
    }
  })

  return (
    <div className='container my-5'>
      <form onSubmit={cateForm.handleSubmit}>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h4>{param.id ? 'Update Category' : 'Add New Category'}</h4>
                <div className='my-3'>
                  <label>Category Name</label>
                  <input onChange={cateForm.handleChange} value={cateForm.values.name} name='name' type='text' className='form-control' />
                </div>
                <br />
                <button type='submit' className='btn btn-primary'>{param.id ? 'Update' : 'Add'}</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Category