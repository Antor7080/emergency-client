import React from 'react';
import { Nav } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import {
    Link
} from "react-router-dom";
import useFirebase from '../../../Hooks/useFirebase';

const Navbar = () => {
    const { user, logOut, admin } = useFirebase()

    return (
        <div>
            <nav className="navbar navbar-expand-lg text-uppercase fixed-top navbar-white navbar-custom sticky" id="navbar">
                <div className="container">

                    <Nav.Link className="navbar-brand nav-link text-uppercase" as={HashLink} to="/home#home">
                        <img className="logo-light" src="https://i.ibb.co/NCbbBNZ/logo.png" alt="" height="35" />
                        <img className="logo-dark" src="https://i.ibb.co/NCbbBNZ/logo.png" alt="" height="35" />
                    </Nav.Link>

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

                                <div className="dropdown">
                                    <button className="btn btn-primary nav-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user.displayName}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                        {
                                            !admin && <> <li className='text-center nav-link'> <Link to='/my-order'>My Order</Link></li>
                                                {/*  <li className='text-center nav-link'> <Link to='/AddReview'>Add Review</Link></li> */}
                                            </>
                                        }

                                        {
                                            admin && <>
                                                <li className='text-center nav-link'> <Link to='/AddTeamMember'>Add Team Member</Link></li>
                                                <li className='text-center nav-link'> <Link to='/manageOrder'>Manage Order</Link></li>
                                                <li className='text-center nav-link'> <Link to='/manageteam'>Manage Team</Link></li>
                                                <li className='text-center nav-link'> <Link to='/manage-services'>Manage Service</Link></li>
                                                <li className='text-center nav-link'> <Link to='/add-serices'>Add Service</Link></li>
                                            </>
                                        }

                                        <li className='text-center'>  <button onClick={logOut} type="button" style={{ padding: "10px 20px" }}
                                            className="btn btn-danger nav-btn">
                                            Logout
                                        </button></li>
                                    </ul>
                                </div>

                            </> :
                                <>

                                    <button type="button" className="btn btn-primary nav-btn">
                                        <Link style={{ color: "white", }} as={Link} to="/login">LOGIN</Link>
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