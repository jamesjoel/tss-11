import React from 'react'
import Star from './Star'
import HalfStar from './HalfStar'
import './ProductBox.css'
import {PATH} from '../../../util/API';

const ProductBox = (props) => {

  
  let discount = props.pro.discount *  props.pro.price / 100;
  
  
  let disPrice = props.pro.price - discount;

  return (
    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
    <div className="product-item text-center border h-100 p-4">
      <h4><span className='badge bg-danger rounded-pill' style={{marginTop : "20px", position : "absolute", marginLeft : "20px"}}>{ props.pro.discount }% off</span></h4>
        <img className="img-fluid mb-4" style={{height : "300px"}} src={PATH+"/product/"+props.pro.image}  alt=""/>

        
        {/* <div className="mb-2">
            {
              props.pro.starRanking == 1 ? <Star /> : ''
            }
            {
              props.pro.starRanking == 1.5 ? <><Star /><HalfStar /></> : ''
            }
            {
              props.pro.starRanking == 2 ? <><Star /><Star /></> : ''
            }
            {
              props.pro.starRanking == 2.5 ? <><Star /><Star /><HalfStar /></> : ''
            }
            {
              props.pro.starRanking == 3 ? <><Star /><Star /><Star /></> : ''
            }
            {
              props.pro.starRanking == 3.5 ? <><Star /><Star /><Star /><HalfStar /></> : ''
            }
            {
              props.pro.starRanking == 4 ? <><Star /><Star /><Star /><Star /></> : ''
            }
            {
              props.pro.starRanking == 4.5 ? <><Star /><Star /><Star /><Star /><HalfStar /></> : ''
            }
            {
              props.pro.starRanking == 5 ? <><Star /><Star /><Star /><Star /><Star /></> : ''
            }
            <small>({props.pro.reviewCount})</small>

        </div> */}
        <small className='mb-0 pb-0 d-block'>({props.pro.category})</small>
        <a href="" className="h6 d-inline-block mb-2">{props.pro.title}</a>
        
        <h5 className="text-primary mb-0">${disPrice.toFixed(2)}</h5>
        <p className="text-primary mb-3"><del>${props.pro.price.toFixed(2)}</del></p>
        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
    </div>
</div>
  )
}



export default ProductBox