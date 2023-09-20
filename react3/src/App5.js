import React, {useState} from 'react'

const App5 = () => {

    let [bgColor, setBgColor] = useState("#000");


    let changeColor = (a)=>{
        setBgColor(a);
    }
    let demo = ()=>{
        setBgColor('#000')
    }

  return (
    <div className='container'>
        <div className='row'>
            <div style={{height : "500px", backgroundColor : bgColor}} className='col-md-8 offset-md-2'></div>
        </div>
        <div className='row mt-4'>
            <div onMouseOut={demo} onMouseOver={()=>changeColor("red")} style={{height : "50px", width : "50px", backgroundColor : "red", margin : "15px"}}></div>

            <div onMouseOut={demo} onMouseOver={()=>changeColor("green")} style={{height : "50px", width : "50px", backgroundColor : "green", margin : "15px"}}></div>

            <div onMouseOut={demo} onMouseOver={()=>changeColor("blue")} style={{height : "50px", width : "50px", backgroundColor : "blue", margin : "15px"}}></div>

            <div onMouseOut={demo} onMouseOver={()=>changeColor("yellow")} style={{height : "50px", width : "50px", backgroundColor : "yellow", margin : "15px"}}></div>
        </div>
    </div>
  )
}

export default App5