import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./Style.css";
import signupSchema from "../../../schemas/SignupSchema";
import axios from "axios";
import {NavLink, useNavigate} from 'react-router-dom'
import {API} from '../../../util/API'

const EditProfile = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({});
  
  
  
  let [allCity, setAllCity] = useState([]);
  let [allState, setAllState] = useState([]);


  


  useEffect(() => {
    axios.get(`${API}/city/state`).then((response) => {
      setAllState(response.data);
    });
  });
  useEffect(()=>{
    axios.get(`${API}/users/info`, {
        headers : { Authorization : localStorage.getItem("token") }
        }
    ).then(response=>{
        // console.log(response.data);
        setUser(response.data.result);
       // signupFrm.setFieldValue("name", response.data.result.name)
    })
}, [])
  

  let signupFrm = useFormik({
    enableReinitialize : true,
    // validationSchema: signupSchema,
    initialValues: user,
    onSubmit: (formData) => {
        //console.log(formData);
    },
  });

  

  let getCity = async (a) => {
    let response = await axios.get(`${API}/city/getcity/`+a)
    setAllCity(response.data);
        
  };

  return (
    <>
      <div className="container my-5" style={{ minHeight: "600px" }}>
        <form onSubmit={signupFrm.handleSubmit}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header bg-dark">
                  <h4 className="text-light">Update Your Profile</h4>
                </div>
                <div className="card-body">
                  <div className="my-2">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={signupFrm.values.name}
                      onChange={signupFrm.handleChange}
                      name="name"
                      className={
                        "form-control " +
                        (signupFrm.errors.name && signupFrm.touched.name
                          ? "is-invalid"
                          : "")
                      }
                    />
                    {signupFrm.errors.name && signupFrm.touched.name ? (
                      <small className="text-danger">
                        {signupFrm.errors.name}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="my-2">
                    <label>Email</label>
                    <input
                      type="text"
                      value={signupFrm.values.email}
                      onChange={signupFrm.handleChange}
                      name="email"
                      className={
                        "form-control " +
                        (signupFrm.errors.email && signupFrm.touched.email
                          ? "is-invalid"
                          : "")
                      }
                    />
                    {signupFrm.errors.email && signupFrm.touched.email ? (
                      <small className="text-danger">
                        {signupFrm.errors.email}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  
                  <div className="my-2">
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={signupFrm.values.address}
                      onChange={signupFrm.handleChange}
                      className={
                        "form-control " +
                        (signupFrm.errors.address && signupFrm.touched.address
                          ? "is-invalid"
                          : "")
                      }
                    ></textarea>
                    {signupFrm.errors.address && signupFrm.touched.address ? (
                      <small className="text-danger">
                        {signupFrm.errors.address}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="my-2">
                    <label>Contact</label>
                    <input
                      type="text"
                      value={signupFrm.values.contact}
                      onChange={signupFrm.handleChange}
                      name="contact"
                      className={
                        "form-control " +
                        (signupFrm.errors.contact && signupFrm.touched.contact
                          ? "is-invalid"
                          : "")
                      }
                    />
                    {signupFrm.errors.contact && signupFrm.touched.contact ? (
                      <small className="text-danger">
                        {signupFrm.errors.contact}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="my-2">
                    <label>State</label>
                    <select
                      name="state"
                      value={signupFrm.values.state}
                      onChange={(event) => {
                        signupFrm.handleChange(event);
                        getCity(event.target.value);
                      }}
                      className={
                        "form-control " +
                        (signupFrm.errors.state && signupFrm.touched.state
                          ? "is-invalid"
                          : "")
                      }
                    >
                      <option>Select</option>
                      {allState.map((value, index) => (
                        <option key={index}>{value}</option>
                      ))}
                    </select>
                    {signupFrm.errors.state && signupFrm.touched.state ? (
                      <small className="text-danger">
                        {signupFrm.errors.state}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                  
                </div>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
