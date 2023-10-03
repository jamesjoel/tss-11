import React from "react";
import { useFormik } from "formik";
import CateSchema from "../../../schemas/CategorySchema";
import axios from 'axios'
import {API} from '../../../util/API'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    let navigate = useNavigate();
  let cateForm = useFormik({
    validationSchema: CateSchema,
    initialValues: {
      name: "",
    },
    onSubmit: (formData) => {
        axios.post(`${API}/category`, formData).then(response=>{
            //console.log(response.data);
            navigate("/admin/category/list")
        })
    },
  });

  return (
    <div className="container my-5">
      <form onSubmit={cateForm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3>Add New Category</h3>
            <div className="my-3 mb-5">
              <label className="mb-3">Category Name</label>
              <input
                name="name"
                onChange={cateForm.handleChange}
                type="text"
                placeholder="Category Name"
                className={'form-control '+(cateForm.errors.name && cateForm.touched.name ? 'is-invalid' : '')}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Category;
