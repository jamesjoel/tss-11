import React from 'react'
import { Routes, Route, NavLink, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/about/info' >Info</NavLink>
        <NavLink to='/about/demo' >Demo</NavLink>
        <NavLink to='/contact' >Contact</NavLink>





        <Routes>
            <Route path='' element={<Home />} />





            <Route path='about' element={<AboutContainer />}>
                <Route path='' element={<About />} />
                <Route path='info' element={<AboutInfo />} />
                <Route path='demo' element={<AboutDemo />} />
            </Route>






            <Route path='contact' element={<Contact />} />
        </Routes>
    </>
  )
}


const Home = ()=>{
    return(
        <h1>Home</h1>
    )
}
const About = ()=>{
    return(
        <h1>About</h1>
    )
}
const AboutInfo = ()=>{
    return(
        <>
        
        <h1>About-Info</h1>
        </>
    )
}
const AboutDemo = ()=>{
    return(
        <h1>AboutDemo</h1>
    )
}
const Contact = ()=>{
    return(
        <h1>Contact</h1>
    )
}

const AboutContainer = ()=>{
    return(
        <>
            <Outlet />
            <h4>The Stepping Stone</h4>
        </>
    )
}


export default App