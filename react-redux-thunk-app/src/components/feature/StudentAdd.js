import React from 'react'
import {useFormik} from 'formik'
import { useSelector,useDispatch } from 'react-redux'
import { addStudent, updateStudent } from '../../redux/StudentSlice'
import { useNavigate, useParams } from 'react-router-dom'


const StudentAdd = () => {
    let navi = useNavigate();
    let param = useParams();
    let dispatch = useDispatch();
    let allstu = useSelector(state=>state.StudentSlice);

    let stu = {name : "", age : ""}

    if(param.id){
        allstu.forEach(value=>{
            if(value.id == param.id)
            {
                stu = value;
            }
        })
    }

    let stuFrm = useFormik({
        initialValues : stu,
        onSubmit : (formdata)=>{
            if(param.id){
                dispatch(updateStudent(formdata));
            }else{

                dispatch(addStudent(formdata))
            }
            navi("/student");
        }
    })

  return (
    <div className="container my-5">
        <form onSubmit={stuFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="my-3">
                    <label htmlFor="">Name</label>
                    <input type='text' value={stuFrm.values.name} name='name' onChange={stuFrm.handleChange} className='form-control' />
                </div>
                <div className="my-3">
                    <label htmlFor="">Age</label>
                    <input type='text' value={stuFrm.values.age} name='age' onChange={stuFrm.handleChange} className='form-control' />
                </div>

                <br />
                <button type='submit' className='btn btn-success'>{param.id ? 'Update' : 'Add' }</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default StudentAdd