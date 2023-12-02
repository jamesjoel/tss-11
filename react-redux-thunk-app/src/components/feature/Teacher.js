import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { insert } from '../../redux/TeacherSlice'


const Teacher = () => {
  let data = useSelector(state=>state.TeacherSlice);
  let disp = useDispatch();
  let myForm = useFormik({
    initialValues : {
      name : "",
      salary : ""
    },
    onSubmit : (formdata)=>{
      disp(insert(formdata));
    }
  })
  return (
    <>
      <div className="container my-5">
      <form onSubmit={myForm.handleSubmit}>

      Name : <input type='text' name='name' onChange={myForm.handleChange}/>
      <br />
      <br />
      Salary : <input type='text' name='salary' onChange={myForm.handleChange}/> 
      <button type='submit'>Add</button>
      </form>

        {
          data.map(value=>{
            return(
              <h3>{value.name} ------ {value.salary}</h3>
            )
          })
        }
      </div>
    </>
  )
}

export default Teacher