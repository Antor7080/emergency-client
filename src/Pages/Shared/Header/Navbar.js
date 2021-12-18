import React from 'react';
import { Nav } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import {
    Link
} from "react-router-dom";
import useFirebase from '../../../Hooks/useFirebase';

const Navbar = () => {
    const { user, logOut } = useFirebase()
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-white navbar-custom sticky" id="navbar">
                <div className="container">

                    <a className="navbar-brand text-uppercase" href="index-1.html">
                        <img className="logo-light" src="images/logo-light.png" alt="" height="25" />
                        <img className="logo-dark" src="images/logo-dark.png" alt="" height="25" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="mdi mdi-menu"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto" id="navbar-navlist">
                            <li className="nav-item">
                                <Nav.Link className="nav-link" as={HashLink} to="/home#home">HOME</Nav.Link>

                            </li>
                            <li className="nav-item">
                                <Nav.Link className="nav-link" as={HashLink} to="/home#features">Features</Nav.Link>

                            </li>
                            <li className="nav-item">

                                <Nav.Link className="nav-link" as={HashLink} to="/home#review">Review</Nav.Link>

                            </li>
                            <li className="nav-item">
                                <Nav.Link className="nav-link" as={HashLink} to="/home#pricing">Pricing</Nav.Link>

                            </li>

                            <li className="nav-item">
                                <Nav.Link className="nav-link" as={HashLink} to="/home#contact">Contact</Nav.Link>

                            </li>
                        </ul>

                        {
                            user.email ? <>
                                <button onClick={logOut} type="button" style={{ padding: "10px 20px" }}
                                    className="btn btn-primary nav-btn">
                                    Logout
                                </button>
                            </> :
                                <>
                                    <button type="button" className="btn btn-primary nav-btn">
                                        <Link style={{ color: "white", }} as={Link} to="/signup">Sign UP</Link>
                                    </button>
                                </>
                        }

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;