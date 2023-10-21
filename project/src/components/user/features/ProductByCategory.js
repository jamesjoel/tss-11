import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductBox from '../shared/ProductBox';
import axios from 'axios';
import { API } from '../../../util/API';
import SearchBar from '../shared/SearchBar';


const ProductByCategory = () => {
    let [product, setProduct] = useState([]);
   
    let params = useParams();
    let catename = params.catename;
    useEffect(()=>{
        axios.get(`${API}/product/bycategory/${catename}`).then(response=>{
            setProduct(response.data);
            // console.log(response.data)
        })
    },[params])


    let sortProduct = (a)=>{
        console.log(a);
    }
  return (
    <>
    <SearchBar sort={sortProduct}/>
    <div className="container-fluid py-5" style={{minHeight : "600px"}}>
        <div className="container">
            
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

export default ProductByCategory