import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../redux/DemoSlice'

const About = () => {
  let disp = useDispatch();
  let x = useSelector(state=>state);

  let hello = ()=>{
    disp(change(200));
  }
  return (
    <>
      <div className='container my-4'>
        <div>About</div>
        <h2>{x}</h2>
        <button onClick={hello}>OK</button>
      </div>

    </>
  )
}

export default About