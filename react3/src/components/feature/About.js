import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {

  let a = useSelector((state)=>state);

  return (
    <>
      <div>About</div>
      <h2>{a.name}</h2>
    </>
  )
}

export default About