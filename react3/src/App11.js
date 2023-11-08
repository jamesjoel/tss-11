import React, {useContext, createContext} from 'react'

let Data = createContext();

const App11 = () => {
    let name = "amar";
  return (
    <>
        <Data.Provider value={name}>
            <div>App11</div>
            <Box1 />

        </Data.Provider>
    </>
  )
}
const Box1 = ()=>{
    return(
        <>
            <h1>This is Box1</h1>
            <Box2 />
        </>
    )
}
const Box2 = ()=>{
    return(
        <>
            <h1>This is Box2</h1>
            <Box3 />
        </>
    )
}
const Box3 = ()=>{
    let a = useContext(Data);
    return(
        <>
            <h1>This is Box3</h1>
            <p>Your Name : {a}</p>
        </>
    )
}

export default App11