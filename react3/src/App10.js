import React from 'react'

const App10 = () => {

    let name = "rohit";

  return (
    <>
        <div>App10</div>
        <Box1 name={name}/>
    </>
  )
}

const Box1 = (props) =>{
    return(
        <>
            <h3>This is Box1</h3>
            
            <Box2 name={props.name}/>
        </>
    )
}
const Box2 = (props)=>{
    return(
        <>
            <h3>This is Box2</h3>
            <Box3  name={props.name}/>
        </>
    )
}
const Box3 = (props)=>{
    return(
        <>
            <h3>This is Box3</h3>
            <p>Name : {props.name}</p>
        </>
    )
}




export default App10