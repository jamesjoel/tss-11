import React, {useState} from 'react'

const Help = () => {
    let [type, setType] = useState("password")
    let [msg, setMsg] = useState("Show");

    let change = ()=>{
        if(type=="password")
        {
            setType("text"); // type = "text"
            setMsg("Hide"); // msg = "hide"
        }else{
            setType("password");
            setMsg("Show");
        }
    }

  return (
    <>
        Password : <input type={type} /><button onClick={change}>{msg}</button>
    </>
  )
}

export default Help