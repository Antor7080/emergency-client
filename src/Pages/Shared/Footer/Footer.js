import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="section footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-sm-10 text-center">
                            <a href="javascript:void(0)"><img src="images/logo-light.png" height="24" alt="" /></a>
                            <p className="mx-auto mt-sm-4">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <ul className="list-unstyled mb-0 mt-4 social-icon">
                                <li className="list-inline-item"><a href="javascript:void(0)"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><i className="mdi mdi-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><i className="mdi mdi-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><i className="mdi mdi-vimeo"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><i className="mdi mdi-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="javascript:void(0)"><i className="mdi mdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center mt-3">
                                <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <a className="text-white" href="javascript:void(0)">Home</a>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <a className="text-white" href="javascript:void(0)">About us</a>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <a className="text-white" href="javascript:void(0)">Order</a>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <a className="text-white" href="javascript:void(0)">Member</a>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <a className="text-white" href="javascript:void(0)">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;