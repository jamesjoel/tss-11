import React, {useState} from 'react'

const App4 = () => {

    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    let hello = (a)=>{
        setX(a.clientX)
        setY(a.clientY)
    }

  return (
    <div>
        <br />
        <br />
        <h3>X axis : {x}</h3>
        <h3>Y axis : {y}</h3>
        <br />
        <br />
        <div onMouseMove={(event)=>hello(event)} style={{backgroundColor : "#ccc", height : "400px", width : "400px"}}></div>
    </div>
  )
}

export default App4