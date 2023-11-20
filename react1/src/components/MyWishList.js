import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { clear } from '../redux/WishListSlice'

const MyWishList = () => {
  let dispatch = useDispatch();
  let data = useSelector(state=>state);

  let del = ()=>{
    dispatch(clear());
  }

  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <button onClick={del} className='btn btn-danger my-3'>Clear Whish List</button>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value, index)=>{
                  return(
                    <tr key={value.id}>
                      <td>{index+1}</td>
                      <td>{value.title}</td>
                      <td>{value.price}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyWishList