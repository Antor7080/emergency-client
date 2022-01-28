import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../image/feature1.png'
import img2 from '../../../image/feature2.png'

const Features = () => {
    return (
        <div>
            <section className="section feature" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-center mb-4">
                                <h2 className="heading">Best Services That We Provide</h2>
                                <p className="text-muted fs-17">Wedding discovery, directory & planning platform in Bangladesh,
                                    where you can find the best wedding vendors with their contacts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-7 mt-sm-4">
                            <div data-aos="fade-right" data-aos-duration="1800">
                                <div className="feature-card p-3 py-sm-4 rounded d-flex">
                                    <div className="flex-shrink-0">
                                        <i className="mdi mdi-responsive text-primary float-start me-3 h2"></i>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <div className="content">
                                            <h5 className="title">Photographers</h5>
                                            <p className="text-muted">A picture is worth a thousand words. It clearly and beautifully captures your emotions- the joy, the laughter, the tears, you name it.</p>
                                            <a href="javascipt:void(0)" className="text-dark">Read More <i
                                                className="mdi mdi-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 mt-sm-4">
                            <div className="feature-card p-3 py-sm-4 rounded">
                                <i className="mdi mdi-layers-triple-outline text-primary float-start me-3 h2"></i>
                                <div className="content d-block overflow-hidden">
                                    <h5 className="title">Makeup Artists</h5>
                                    <p className="text-muted mt-2">In contemporary makeup, Zahid Khan Makeover has received "Best Makeup artist Award-2017" for it's exclusive makeup.</p>
                                    <a href="javascipt:void(0)" className="text-dark">Read More <i
                                        className="mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 mt-sm-4">
                            <div data-aos="fade-left" data-aos-duration="1800">
                                <div className="feature-card p-3 py-sm-4 rounded">
                                    <i className="mdi mdi-clipboard-flow-outline text-primary float-start me-3 h2"></i>
                                    <div className="content d-block overflow-hidden">
                                        <h5 className="title">Wedding Cars</h5>
                                        <p className="text-muted mt-2">Zoom Rent a Car in Dhaka has become the top
                                            trade name in car rental services in Bangladesh..</p>
                                        <a href="javascipt:void(0)" className="text-dark">Read More <i
                                            className="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-sm-5 py-5 align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div data-aos="fade-right" data-aos-duration="1800">
                                <div className="card bg-transparent border-0 mb-3 mb-lg-0">
                                    <img src={img1} className="img-fluid rounded-3" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div data-aos="fade-left" data-aos-duration="1800">
                                <h3 className="feature-heading mb-2">WEDDING VENDOR</h3>
                                <p className="text-muted">BDWEDDING is the largest where you can find the best
                                    wedding vendors with their contacts and tons of trusted reviews at the click of a button</p>
                                <ul className="feature-list">
                                    <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>Showcase your Business profile on your personal page</li>
                                    <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>Designing
                                        marketing materials </li>
                                    <li><i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>Get contacted directily by customers</li>
                                </ul>
                                <a className="btn btn-primary" href="avascipt:void(0)">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div data-aos="fade-right" data-aos-duration="1800">
                                <h3 className="feature-heading">We aim to help busy peoples</h3>
                                <p className="text-muted">Reach target customers by Multiple Navigation Vendor Access System.</p>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <a className="accordion-button" data-bs-toggle="collapse" href="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                <div>
                                                    <p className="mb-0">Flexible access to facilities.</p>
                                                    <p className="mb-0 fs-13 text-muted">Our new key fobs make it so easy!</p>
                                                </div>
                                            </a>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="fs-14 text-muted mb-1">Whether you are looking for hiring wedding planners or top photographers or for just some ideas and inspirations for your upcoming wedding,</p>
                                                <p className='fs-14 text-decoration-none'> <Link to='/aboutUs'>  Check it out</Link> <i className="mdi mdi-arrow-right"></i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <a className="accordion-button collapsed" data-bs-toggle="collapse"
                                                href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div>
                                                    <p className="mb-0">Snacks, drinks, coffee, and more.</p>
                                                    <p className="mb-0 fs-13 text-muted">Keep your engine going with free food
                                                        and drinks.</p>
                                                </div>
                                            </a>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="fs-14 text-muted mb-0">Whether you are looking for hiring wedding planners or top photographers or for just some ideas and inspirations for your upcoming wedding,.</p>
                                                <p className='fs-14 text-decoration-none'> <Link to='/aboutUs'>  Check it out</Link> <i className="mdi mdi-arrow-right"></i></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <a className="accordion-button collapsed" data-bs-toggle="collapse"
                                                href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <div>
                                                    <p className="mb-0">On site tech support</p>
                                                    <p className="mb-0 fs-13 text-muted">Connectivity, power, and IT issues
                                                        solved in no time.</p>
                                                </div>
                                            </a>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="fs-14 text-muted mb-0">Whether you are looking for hiring wedding planners or top photographers or for just some ideas and inspirations for your upcoming wedding.</p>

                                                <p className='fs-14 text-decoration-none'> <Link to='/aboutUs'>  Check it out</Link> <i className="mdi mdi-arrow-right"></i></p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div data-aos="fade-left" data-aos-duration="1800">
                                <div className="card bg-transparent border-0">
                                    <img src={img2} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;