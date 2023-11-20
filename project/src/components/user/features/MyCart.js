import React from 'react'
import { useSelector } from 'react-redux'
import { PATH } from '../../../util/API'

const MyCart = () => {
    let cartData = useSelector(state=>state);
  return (
    <div className="container my-3" style={{minHeight : "750px"}}>
        <div className='row'>
            <div className='col-md-8' style={{backgroundColor : "#e5e5e5"}}>

                {
                    cartData.map((value, index)=>{
                        return(
                                <div key={index} className='row border-bottom border-dark'>
                                    <div className='col-md-3 py-3'>
                                        <img src={PATH+"/product/"+value.image} className='img-thumbnail' style={{height : "150px", width : "150px"}}/>
                                    </div>
                                    <div className='col-md-9 my-3'>
                                        <h4>{value.title}</h4>
                                        <p>{value.category}</p>
                                        <h6>{value.price}</h6>
                                        <button className='btn btn-sm btn-dark m-0'>Remove</button>
                                    </div>
                                </div>
                        )
                    })
                }


            </div>
            <div className='col-md-4'>
                <div className='card'>
                    <div className='card-header'><h5>PRICE DETAIL</h5></div>
                    <div className='card-body p-3'>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>Price (3 Items)</td>
                                    <td>45000.00</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td>-45000.00</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charg</td>
                                    <td>+500.00</td>
                                </tr>
                                <tr>
                                    <td className='h5'>Total Amount</td>
                                    <td className='h5'>50000.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <button className='btn btn-sm m-0 btn-primary'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyCart