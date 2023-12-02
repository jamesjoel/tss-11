import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../redux/TeacherSlice'

const TeacherList = () => {

  let disp = useDispatch();
  let data = useSelector(state=>state.TeacherSlice);
  
  let del = (obj)=>{
    disp(remove(obj));
  }

  return (
    <>
      <div className="container my-5">
        {
          data.map(value=>{
            return(
              <h3>{value.name} ------ {value.salary} ****** <button onClick={()=>del(value)}>Del</button></h3>
            )
          })
        }
      </div>
    </>
  )
}

export default TeacherList