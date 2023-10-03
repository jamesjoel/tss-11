import React from 'react'

const FeaturedProduct = () => {
  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Best Benefits Of Our</span> Natural Hair
                    Shampoo</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4 align-items-center">
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="row g-5">
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: "80px", height: "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Natural & Organic</h5>
                                <hr className="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: "80px", height: "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Anti Hair Fall</h5>
                                <hr className="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: "80px", height: "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>Anti-dandruff</h5>
                                <hr className="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <img className="img-fluid animated pulse infinite" src="/assets/img/shampoo.png"/>
                </div>
                <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="row g-5">
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: "80px", height: "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>No Internal Side Effect</h5>
                                <hr className="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: "80px", height: "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>No Skin Irritation</h5>
                                <hr className="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="btn-square rounded-circle border flex-shrink-0"
                                style={{width: "80px", height: "80px"}}>
                                <i className="fa fa-check fa-2x text-primary"></i>
                            </div>
                            <div className="ps-3">
                                <h5>No Artificial Smell</h5>
                                <hr className="w-25 bg-primary my-2" />
                                <span>Lorem ipsum dolor sit amet adipiscing elit aliquet.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProduct