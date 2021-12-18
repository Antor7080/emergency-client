import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="section home home-1" id="home">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="home-heading">
                                <h1 className="mb-3 text-white">Start your Successful
                                    Business With <span className="typewrite text-primary d-none d-sm-inline-block"
                                        data-period="2000" data-type='[ "Oxhen" ]'>
                                        <span className="wrap"></span> </span>
                                </h1>
                            </div>
                            <p className="text-white-50 fs-20">Explore and learn more about everything from machine learning and
                                global payments to scaling your team.</p>
                            <div className="home-btn hstack gap-2 flex-column d-sm-block">
                                <a className="btn btn-white me-1" href="">Request Free Demo</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="container-fluid">
                <div className="row">
                    <div className="home-shape-arrow">
                        <a href="#features" className="mouse-down"><i
                            className="mdi mdi-arrow-down arrow-icon text-dark h5"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;