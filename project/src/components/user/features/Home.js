import React from 'react'
import Slider from '../shared/Slider'
import ProductBox from '../shared/ProductBox'
const Home = () => {
    let allProduct = [
        {
            _id : 1,
            title : "Teddy Bear",
            price : 1200,
            reviewCount : 9,
            image : "pro1.jpg",
            starRanking : 2.5
        },
        {
            _id : 2,
            title : "Remote Car",
            price : 800,
            reviewCount : 25,
            image : "pro2.jpg",
            starRanking : 3
        },
        {
            _id : 3,
            title : "Lego Set",
            price : 3000,
            reviewCount : 16,
            image : "pro3.png",
            starRanking : 4
        },
        {
            _id : 4,
            title : "Barbie Doll",
            price : 2200,
            reviewCount : 65,
            image : "pro4.jpg",
            starRanking : 3.5
        },
        {
            _id : 5,
            title : "Robot Toy",
            price : 3500,
            reviewCount : 4,
            image : "pro5.jpg",
            starRanking : 4
        },
        {
            _id : 6,
            title : "Toy Train",
            price : 1400,
            reviewCount : 14,
            image : "pro6.jpg",
            starRanking : 2.5
        }
        
    ]


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
                allProduct.map((value, index)=><ProductBox key={index} pro={value} />)
               } 
               
               
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Home