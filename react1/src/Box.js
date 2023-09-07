import './Style.css'
import MiniBox from './MiniBox'
let Box = ()=>{

    let a =  "The Stepping Stone"

    let obj = {
        name : "vijay",
        age : 30
    }

    return(
        <>
            <h1 style={{ color : "blue", backgroundColor : "red", fontSize : "50px" }}>Hello</h1>
            <p className="para" style={{ width : "300px", fontSize : "30px", backgroundColor : "green"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, soluta neque. Facere, repellat delectus assumenda, praesentium illum aliquid architecto deserunt ipsum non culpa molestias quos esse aspernatur quo, explicabo ducimus.</p>

            <MiniBox title={a} obj={obj} />
        </>
    )
}

export default Box;