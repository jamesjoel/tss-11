import React, {useState} from 'react'

const App2 = () => {

    let [bgColor, setBgColor] = useState("red");
    let [x, setX] = useState(200);

    let demo1 = ()=>{
        setBgColor("blue");
    }
    let demo2 = ()=>{
        setBgColor("green");
    }
    
    let demo3 = ()=>{
        setX(()=>{
            let a = x+1;
            return a;
        })
    }

    let hello = (event)=>{
        event.preventDefault();
    }

  return (
    <>
        <br />
        <br />
        <a onClick={(e)=>hello(e)} href='http://google.com'>Google</a>
        {/* <button onClick={(e)=>hello(e)}>OK</button> */}
        {/* <button onClick={demo1} onDoubleClick={demo2}>OK</button>
        <br />
        <h1>{a}</h1> */}
        {/* <div onMouseOut={demo2} onMouseOver={demo1} onMouseMove={demo3} style={{ backgroundColor : bgColor, height : x+"px", width : x+"px"}}> */}

        {/* </div> */}
    </>
  )
}

export default App2