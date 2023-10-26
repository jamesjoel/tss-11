import React, {useState, useRef} from 'react'

const Setting = () => {

  let x = useRef();

  // let a = 10;
 
  let demo = ()=>{
    x.current.style.backgroundColor = "red";
  }
  return (
    <div>
      <h2 ref={x}>Hello Indore</h2>
      <button onClick={demo}>OK</button>
    </div>
  )
}

export default Setting