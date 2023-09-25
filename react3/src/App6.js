import React, {useState} from 'react'

const App6 = () => {

    let [x, setX] = useState("#fff");

    let demo1 = (a)=>{
        console.log(a);
    }
    let demo2 = ()=>{
        console.log("**********");
    }
    let demo3 = (a)=>{
        console.log("##########", a);
        a.preventDefault();
    }
    let demo4 = ()=>{
        console.log("-------");
        
    }
    let demo5 = ()=>{
        console.log("@@@@@@@@");
        
    }
    let demo6 = ()=>{
        console.log("%%%%%%%");
        
    }
    let demo7 = (a)=>{
        if(a.code=="KeyO"){
            // console.log("#########");
            a.preventDefault();
        }
        
    }
    let demo8 = ()=>{
        
        // console.log("-----------------------");
        
    }

    let demo9 = ()=>{
        setX("red");
    }
    let demo10 = ()=>{
        setX("green");
    }


  return (
    <>
        <button onClick={(event)=>demo1(event)}>OK</button>
        <button onDoubleClick={demo2}>OK</button>
        <p onContextMenu={(event)=>demo3(event)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum porro ea possimus cum velit sed. Illum quia dolorem at velit. Dolor nesciunt voluptate tempore neque, provident praesentium ut id corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque dicta, minima, debitis, sunt molestias accusamus impedit magni saepe aliquid laudantium. Accusantium ducimus magni assumenda distinctio itaque error impedit doloribus?</p>
        <br />
        <br />
        <div onMouseOver={demo4} onMouseOut={demo6} onMouseMove={demo5} style={{height : "200px", width : "200px", backgroundColor :"#411244"}}></div>
        <br />
        <br />
        <input type='text' onKeyDown={(event)=>demo7(event)} onKeyUp={demo8}/>
        <br />
        <br />
        <input type='text' style={{backgroundColor : x}} onFocus={demo9} onBlur={demo10}/>
        <br />
        <br />
        <input type='text' />
    </>
  )
}

export default App6