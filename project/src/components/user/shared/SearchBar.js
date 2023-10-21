import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='container bg-dark p-3 my-5'>
        <h6 className='text-light'>Search Your Product</h6>
        <div className='row'>
        <div className='col-md-6'>
            <input type='text' placeholder='Search Your Product' className='form-control'/>
        </div>
        <div className='col-md-6'>

            <select onChange={(event)=>props.sort(event.target.value)} className='form-control'>
                <option value={0}>Sort</option>
                <option value={1}>Newest First</option>
                <option value={2}>Price : Low to High</option>
                <option value={3}>Price : High to Low</option>
            </select>
        </div>
        </div>
    </div>
  )
}

export default SearchBar