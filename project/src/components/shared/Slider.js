import React from 'react'

const Slider = () => {
  return (
    <div className="container-fluid bg-primary hero-header mb-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h3 className="fw-light text-white animated slideInRight">Natural & Organic</h3>
                    <h1 className="display-4 text-white animated slideInRight">Hair <span className="fw-light text-dark">Shampoo</span> For Healthy Hair</h1>
                    <p className="text-white mb-4 animated slideInRight">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius natoque penatibus et
                        magnis dis parturient montes.</p>
                    <a href="" className="btn btn-dark py-2 px-4 me-3 animated slideInRight">Shop Now</a>
                    <a href="" className="btn btn-outline-dark py-2 px-4 animated slideInRight">Contact Us</a>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid animated pulse infinite" src="/assets/img/shampoo.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider