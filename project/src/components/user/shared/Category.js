import React from 'react'
import { NavLink } from 'react-router-dom'

const Category = (props) => {
  return (
    <>
        <NavLink to={"/category/"+props.cate.name} className="dropdown-item">{props.cate.name}</NavLink>
    </>
  )
}

export default Category