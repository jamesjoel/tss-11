import React, {useEffect, useState} from 'react'
import Slider from '../shared/Slider'
import ProductBox from '../shared/ProductBox'
import axios from 'axios'
import {API} from '../../../util/API'
const Home = () => {
    
    let [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get(`${API}/product`).then(response=>{
            setProduct(response.data);
        })
    }, [])

  return (
    <>
    <Slider />
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4">

               {
                product.map((value, index)=><ProductBox key={index} pro={value} />)
               } 
               
               
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Home