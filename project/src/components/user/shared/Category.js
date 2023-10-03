import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = (props) => {
  return (
    <>
        <NavLink to="" className="dropdown-item">{props.cate.name}</NavLink>
    </>
  )
}

export default Category