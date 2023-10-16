import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./Style.css";
import signupSchema from "../../../schemas/SignupSchema";
import axios from "axios";
import {NavLink, useNavigate} from 'react-router-dom'
import {API} from '../../../util/API'

const Signup = () => {
  let navigate = useNavigate();
  let [confirm, setConfirm] = useState(false);
  let [err, setErr] = useState(false);
  let [preloader, setPreLoader] = useState(false);

  let [allCity, setAllCity] = useState([]);
  let [allState, setAllState] = useState([]);


  useEffect(()=>{
    if(localStorage.getItem("token"))
    {
      navigate("/")
    }
  }, [])


  useEffect(() => {
    axios.get(`${API}/city/state`).then((response) => {
      setAllState(response.data);
    });
  });

  let signupFrm = useFormik({
    validationSchema: signupSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      contact: "",
      address: "",
      city: "",
      gender: "",
      state: "",
    },
    onSubmit: (formData) => {
      // console.log(formData);
      setPreLoader(true);
      axios
        .post(`${API}/signup`, formData)
        .then((response) => {
          setConfirm(true);
          signupFrm.resetForm();
          setPreLoader(false);
          setErr(false);
        })
        .catch((err) => {
          console.log(err);
          setErr(true);
          setConfirm(false);
          setPreLoader(false);
        });
    },
  });

  let getCity = (a) => {
    axios.get(`${API}/city/getcity/`+a).then(response=>{
        //console.log(response.data);
        setAllCity(response.data);
    })
  };

  return (
    <>
      <div className="container my-5" style={{ minHeight: "600px" }}>
        <form onSubmit={signupFrm.handleSubmit}>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header bg-dark">
                  <h4 className="text-light">Registration</h4>
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
                    <label>Password</label>
                    <input
                      type="password"
                      value={signupFrm.values.password}
                      onChange={signupFrm.handleChange}
                      name="password"
                      className={
                        "form-control " +
                        (signupFrm.errors.password && signupFrm.touched.password
                          ? "is-invalid"
                          : "")
                      }
                    />
                    {signupFrm.errors.password && signupFrm.touched.password ? (
                      <small className="text-danger">
                        {signupFrm.errors.password}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="my-2">
                    <label>Re-Password</label>
                    <input
                      type="password"
                      value={signupFrm.values.repassword}
                      onChange={signupFrm.handleChange}
                      name="repassword"
                      className={
                        "form-control " +
                        (signupFrm.errors.repassword &&
                        signupFrm.touched.repassword
                          ? "is-invalid"
                          : "")
                      }
                    />
                    {signupFrm.errors.repassword &&
                    signupFrm.touched.repassword ? (
                      <small className="text-danger">
                        {signupFrm.errors.repassword}
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
                  <div className="my-2">
                    <label>City</label>
                    <select
                      name="city"
                      value={signupFrm.values.city}
                      onChange={signupFrm.handleChange}
                      className={
                        "form-control " +
                        (signupFrm.errors.city && signupFrm.touched.city
                          ? "is-invalid"
                          : "")
                      }
                    >
                      <option>Select</option>
                      {allCity.map((value) => (
                        <option key={value._id}>{value.name}</option>
                      ))}
                    </select>
                    {signupFrm.errors.city && signupFrm.touched.city ? (
                      <small className="text-danger">
                        {signupFrm.errors.city}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="my-2">
                    <label>Gender</label>
                    <br />
                    <div className="form-check">
                      <label htmlFor="male">Male</label>
                      <input
                        id="male"
                        type="radio"
                        className={
                          "form-check-input " +
                          (signupFrm.errors.gender && signupFrm.touched.gender
                            ? "is-invalid-radio"
                            : "")
                        }
                        onChange={signupFrm.handleChange}
                        name="gender"
                        value="male"
                      />
                    </div>
                    <div className="form-check">
                      <label htmlFor="female">Female</label>
                      <input
                        id="female"
                        type="radio"
                        className={
                          "form-check-input " +
                          (signupFrm.errors.gender && signupFrm.touched.gender
                            ? "is-invalid-radio"
                            : "")
                        }
                        onChange={signupFrm.handleChange}
                        name="gender"
                        value="female"
                      />
                    </div>

                    {signupFrm.errors.gender && signupFrm.touched.gender ? (
                      <small className="text-danger">
                        {signupFrm.errors.gender}
                      </small>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Signup{" "}
                    {preloader ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </div>
              {confirm ? (
                <div className="alert alert-success my-5">
                  You are successful signup with our website, Please <NavLink to='/login'>Login Here</NavLink>
                </div>
              ) : (
                ""
              )}

              {err ? (
                <div className="alert alert-danger my-5">
                  Somthing went wrong !!!!
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
