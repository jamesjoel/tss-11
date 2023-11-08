import React from 'react'
import Box1 from './Box1'
import Demo from './Demo'

const Home = () => {
  let obj ={ 
    name : "rohit",
    fee : 8000,
    city : "indore"
  }
  return (
    <>
    <Demo.Provider value={obj}>
        <div>Home</div> 
        <Box1 />
    </Demo.Provider>
    </>
  )
}

export default Home