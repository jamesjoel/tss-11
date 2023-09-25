import React, {useState} from 'react'

const App8 = () => {

    let [data, setData] = useState({
        a : "",
        b : "",
        c : "",
        d : ""
    })
    
  return (
    <>
        <h1>{data.a}</h1>
        <h1>{data.b}</h1>
        <h1>{data.c}</h1>
        <h1>{data.d}</h1>
        <br />
        <br />
        <input type='text' onChange={(event)=>setData({...data, a : event.target.value})}/>
        <br />
        <br />
        <input type='text' onChange={(event)=>setData({...data, b : event.target.value})}/>
        <br />
        <br />
        <input type='text' onChange={(event)=>setData({...data, c : event.target.value})}/>
        <br />
        <br />
        Male<input value="male" type='radio' name='gender' onChange={(event)=>setData({...data, d : event.target.value})}/>
        Female<input value="female" type='radio' name='gender' onChange={(event)=>setData({...data, d : event.target.value})}/>
    </>
  )
}

export default App8

/*

let data = { name : "rohit", age : 25 }

let obj = {...data, name : "amar"};



*/