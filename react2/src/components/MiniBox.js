import React from 'react'

const MiniBox = (props) => {
    let styles = {
        backgroundColor : "#700140",
        height : "200px",
        width : "200px",
        padding : "20px"
    }
  return (
    <div style={styles}>
        MiniBox ---- <b>{ props.pqr.d }</b>
    </div>
  )
}

export default MiniBox