import React, {useState} from 'react'

const App3 = () => {

    let [disp, setDisp] = useState("none");
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    let demo = (event)=>{
        // console.log(event);

        setX(event.pageX);
        setY(event.pageY);

        event.preventDefault();
        setDisp("block")
    }

    let demo2 = ()=>{
        setDisp("none");
    }

    let demo3 = (event)=>{
        setX(event.pageX);
        setY(event.pageY);
    }
  return (<>
      <div onMouseMove={(e)=>demo3(e)} onClick={demo2} onContextMenu={(e)=>demo(e)} style={{ width : "1000px", height : "600px", backgroundColor : "gray"}}></div>
      <div  style={{ backgroundColor : "red", height : "250px", width : "150px", position : "absolute", top : y+"px", left : x+"px", display : disp, transition : ".2s"}}></div>
  </>
  )
}

export default App3


