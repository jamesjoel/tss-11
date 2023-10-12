import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API} from '../../../util/API'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    let navigate = useNavigate();
    let [cate, setCate] = useState([]);

    let proForm = useFormik({
        initialValues : {
            title : "",
            price : "",
            category : "",
            discount : "",
            detail : ""            
        },
        onSubmit:(formdata)=>{
            // console.log(formdata);
            axios.post(`${API}/product`, formdata).then(response=>{
                console.log(response.data);
                navigate("/admin/product/list")
            })
        }
    })

    useEffect(()=>{
        axios.get(`${API}/category`).then(response=>{
            setCate(response.data);
        })
    }, [])

  return (
    <div className="container my-4">
        <form onSubmit={proForm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>Add New Product</h3>
                <div className='my-4'>
                    <label>Product Title</label>
                    <input type='text' name='title' onChange={proForm.handleChange} className='form-control' />
                </div>
                <div className='my-4'>
                    <label>Product Price</label>
                    <input type='text' name='price' onChange={proForm.handleChange} className='form-control' />
                </div>
                <div className='my-4'>
                    <label>Product Category</label>
                    <select className='form-control' name='category' onChange={proForm.handleChange}>
                        <option>Select</option>
                        {
                            cate.map(value=><option key={value._id}>{value.name}</option>)
                        }
                    </select>
                </div>
                <div className='my-4'>
                    <label>Product Detail</label>
                    <textarea className='form-control' name='detail' onChange={proForm.handleChange}></textarea>
                </div>
                <div className='my-4'>
                    <label>Product Discount</label>
                    <input name='discount' onChange={proForm.handleChange} type='text' className='form-control' />
                </div>
                <br />
                <div className='d-grid'>

                <button type='submit' className='btn btn-primary'>Add</button>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Product