import React, {useState} from 'react'

const Contact = () => {

    let [ path, setPath ] = useState("/assets/image/1.jpg")

    let demo1 = ()=>{
        setPath("/assets/image/1.jpg")
    }
    let demo2 = ()=>{
        setPath("/assets/image/2.jpg")
    }
  return (
   <>
    <img src={path} style={{ height : "300px", width : "300px"}} />
    <br />
    <br />
    <button onClick={demo1}>First</button>
    <button onClick={demo2}>Second</button>
   </>
  )
}

export default Contact