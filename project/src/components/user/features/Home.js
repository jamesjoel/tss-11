import React, {useEffect, useState} from 'react'
import Slider from '../shared/Slider'
import ProductBox from '../shared/ProductBox'
import axios from 'axios'
import {API} from '../../../util/API'
import SearchBar from '../shared/SearchBar'
import Overlay from '../shared/Overlay'
const Home = () => {
    
    let [product, setProduct] = useState([]);
    let [sortType, setSortType] = useState(0);
    let [loader, setLoader] = useState(false);
    useEffect(()=>{
        axios.get(`${API}/product`).then(response=>{
            setProduct(response.data);
        })
    }, [])

    // 0 = sort
    // 1 = newest
    // 2 = low to
    // 3 = hei to
    let sortProduct = (a)=>{
        //console.log(a);
        setLoader(true);
        setSortType(a);
        axios.get(`${API}/product/sort/price/${a}`).then(response=>{
            setProduct(response.data);
            setLoader(false);
        })
    }

  return (
    <>
    {
        loader ? <Overlay /> : ''
    }
    <Slider />
    
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <SearchBar sort={sortProduct}/>
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