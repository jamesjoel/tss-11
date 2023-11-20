import React, {useState, useRef} from 'react'




const Setting = () => {

  

  let x = useRef();

  
  let demo = ()=>{
    x.current.style.backgroundColor = "red";
  }


  

  return (
    <div>
      <h2 ref={x}>Hello Indore</h2>
      
      
    </div>
  )
}

export default Setting