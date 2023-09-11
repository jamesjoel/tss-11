import React from 'react'
import SmallBox from './SmallBox'
import MiniBox from './MiniBox'


const Box = (props) => {
    let styles = {
        backgroundColor : "#CD4510",
        width : "800px",
        height : "500px",
        padding : "20px"
    }
  return (
    <div style={styles}>
        Box ---- 
        <b>{props.xyz.b}</b>
        <SmallBox abc = {props.xyz}/>
        <MiniBox pqr={{ d : "James"}}/>
    </div>
  )
}

export default Box