import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  let data = useSelector(state=>state.TeacherSlice);
  
  return (
    <>
      <div className="container my-5">
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

export default Home