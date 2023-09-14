import React from 'react'

const ProductBox = (props) => {


  return (
    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
    <div className="product-item text-center border h-100 p-4">
        <img className="img-fluid mb-4" style={{height : "300px"}} src={'/assets/img/'+props.pro.image} alt=""/>
        <div className="mb-2">
          {
            
          }
          {
            (props.pro.startRanking == 1 || Math.ceil(props.pro.startRanking)-1 == 1 )  ? <small className="fa fa-star text-primary"></small> : ''
          }
          {
            (props.pro.startRanking == 2 || Math.ceil(props.pro.startRanking)-1 == 2) ? 
              (
                <>
                  <small className="fa fa-star text-primary"></small>
                  <small className="fa fa-star text-primary"></small></>
              ) : ''
          }
          {
            (props.pro.startRanking == 3 || Math.ceil(props.pro.startRanking)-1 == 3 ) ? 
            (
              <>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </>
            ) : ''
          }
          {
            (props.pro.startRanking == 4 || Math.ceil(props.pro.startRanking)-1 == 4) ? 
            (
              <>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </>
            ) : ''
          }
          {
            (props.pro.startRanking == 5 || Math.ceil(props.pro.startRanking)-1 == 5) ? 
            (
              <>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </>
            ) : ''
          }
          {
            props.pro.startRanking % 1 != 0 ? <small className="fa fa-star-half text-primary"></small> : ''
          }
            
            
            
            <small>({props.pro.reviewCount})</small>
        </div>
        <a href="" className="h6 d-inline-block mb-2">{props.pro.title}</a>
        <h5 className="text-primary mb-3">${props.pro.price}</h5>
        <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
    </div>
</div>
  )
}

export default ProductBox