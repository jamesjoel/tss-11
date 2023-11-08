import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  let user = useSelector((state)=>state);
  return (
    <>
      <div>Contact</div>
      <h1>{user.city}</h1>
      <h1>{user.age}</h1>
      <h1>{user.name}</h1>
    </>
  )
}

export default Contact