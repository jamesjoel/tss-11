import React from 'react'

const TesteMonial = () => {
  return (
    <div className="container-fluid py-5">
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">From Our</span> Blog Articles</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="blog-item border h-100 p-4">
                        <img className="img-fluid mb-4" src="/assets/img/blog-1.jpg" alt="" />
                        <a href="" className="h5 lh-base d-inline-block">Foods that are good for your hair growing</a>
                        <div className="d-flex text-black-50 mb-2">
                            <div className="pe-3">
                                <small className="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div className="pe-3">
                                <small className="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <a href="" className="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="blog-item border h-100 p-4">
                        <img className="img-fluid mb-4" src="/assets/img/blog-2.jpg" alt="" />
                        <a href="" className="h5 lh-base d-inline-block">How to take care of hair naturally</a>
                        <div className="d-flex text-black-50 mb-2">
                            <div className="pe-3">
                                <small className="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div className="pe-3">
                                <small className="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <a href="" className="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="blog-item border h-100 p-4">
                        <img className="img-fluid mb-4" src="/assets/img/blog-3.jpg" alt="" />
                        <a href="" className="h5 lh-base d-inline-block">How to use our natural & organic shampoo</a>
                        <div className="d-flex text-black-50 mb-2">
                            <div className="pe-3">
                                <small className="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div className="pe-3">
                                <small className="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <a href="" className="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TesteMonial