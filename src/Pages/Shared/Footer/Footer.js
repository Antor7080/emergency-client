import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div>
            <footer className="section footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-sm-10 text-center">
                            <Nav.Link as={HashLink} to="/home#home"><img src="https://i.ibb.co/NCbbBNZ/logo.png" height="24" alt="" /></Nav.Link>
                            <p className="mx-auto mt-sm-4">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <ul className="list-unstyled mb-0 mt-4 social-icon">
                                <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/Antor15/"><i className="mdi mdi-facebook"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/antor7080"><i className="mdi mdi-twitter"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/jh.antor/"><i className="mdi mdi-instagram"></i></a></li>
                                <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/antor7080/"><i className="mdi mdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center mt-3">
                                <ul className="list-unstyled mb-0">
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <Nav.Link className="nav-link text-white" as={HashLink} to="/home#home">HOME</Nav.Link>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <Nav.Link className="nav-link text-white" to='/AboutUs'>ABOUT US</Nav.Link>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <li className="list-inline-item mx-lg-3 m-2">
                                            <Nav.Link className="nav-link text-white" to='/my-order'>ORDER</Nav.Link>
                                        </li>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <Nav.Link className="nav-link text-white" as={HashLink} to="/home#pricing">PACKAGE</Nav.Link>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 m-2">
                                        <Nav.Link className="nav-link text-white" as={HashLink} to="/home#contact">CONTACT US</Nav.Link>
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