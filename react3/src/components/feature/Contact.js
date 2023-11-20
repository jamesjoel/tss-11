import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../redux/DemoSlice'

const Contact = () => {
  let disp = useDispatch();
  let x = useSelector(state=>state);

  let hello = ()=>{
    disp(change(5));
  }
  return (
    <>
      <div className='container my-3'>
        <div>Contact</div>
        <h3>{x}</h3>
        <button onClick={hello}>OK</button>
      </div>
    </>
  )
}

export default Contact