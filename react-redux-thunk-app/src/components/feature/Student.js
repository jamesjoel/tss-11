import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { deleteStudent } from '../../redux/StudentSlice'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let stu = useSelector(state=>state.StudentSlice);

  let del = (obj)=>{
    dispatch(deleteStudent(obj));
  }
  let update = (obj)=>{
    navigate("/student/update/"+obj.id);
  }

  return (
      <div className="container my-5">
        <div className="row">
          <NavLink to="/student/add">Add New Student</NavLink>
          <div className="col-md-10 offset-md-1">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {
                  stu.map((value, index)=><tr key={value.id}>
                          <td>{index+1}</td>
                          <td>{value.name}</td>
                          <td>{value.age}</td>
                          <td><button onClick={()=>del(value)} className='btn btn-sm btn-danger'>Delete</button></td>
                          <td><button onClick={()=>update(value)} className='btn btn-sm btn-info'>Update</button></td>
                      </tr>
                      )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Student