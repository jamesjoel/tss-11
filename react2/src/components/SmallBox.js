import React from 'react'
import MiniBox from './MiniBox'

const SmallBox = (props) => {
    let styles = {
        backgroundColor : "#CDFC40",
        width : "400px",
        height : "400px",
        padding : "20px",
        color : "#fff"
    }
  return (
    <div style={styles}>
        SmallBox ---- <b>{ props.abc.c }</b>
        <MiniBox pqr={props.abc} />
    </div>
  )
}

export default SmallBox