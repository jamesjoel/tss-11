import React from 'react'

const Product = () => {
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>Add New Product</h3>
                <div className='my-4'>
                    <label>Product Title</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='my-4'>
                    <label>Product Price</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='my-4'>
                    <label>Product Category</label>
                    <select className='form-control'>
                        <option>Select</option>
                    </select>
                </div>
                <div className='my-4'>
                    <label>Product Detail</label>
                    <textarea className='form-control' ></textarea>
                </div>
                <div className='my-4'>
                    <label>Product Discount</label>
                    <input type='text' className='form-control' />
                </div>
                <br />
                <div className='d-grid'>

                <button type='submit' className='btn btn-primary'>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product