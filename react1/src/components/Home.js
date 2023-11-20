import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add } from '../redux/WishListSlice'

const Home = () => {

    let dispatch = useDispatch();

    let [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get("https://api.escuelajs.co/api/v1/products").then(response=>{
            setProduct(response.data);
        })
    },[])


    let addToWish = (obj)=>{
        dispatch(add(obj))
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1 my-4">
                    <h3>All Products</h3>
                    <div className='row'>
                        {
                            product.map(value=>{
                                return(
                                    <div key={value.id} className='col-md-3'>
                                        <div className='card m-2'>
                                            <img src={value.images[1]} className='card-img-top' />
                                            <div className='card-body' style={{minHeight : "130px"}}>
                                                <p className='card-title'>{value.title}</p>
                                                <small>{value.price}</small>
                                            </div>
                                            <div className='card-footer'>
                                                <button className='btn btn-info btn-sm'>Buy</button>
                                                <button onClick={()=>addToWish(value)} className='btn btn-sm float-end'>
                                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home