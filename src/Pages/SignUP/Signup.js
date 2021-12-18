import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase.js';


const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, userRegister, isLoading, authError } = useFirebase()
    const handleonChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        /* if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        } */
        userRegister(loginData.email, loginData.password, loginData.name, navigate);
    }
    return (
        <div>

            <div className="bg-account-pages" style={{ paddingTop: "50px" }}>
                <div className="container">
                    <h1> </h1>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <a href="d" className="d-block auth-logo">
                                    <img src="images/logo-dark.png" alt="" height="24" className="logo logo-dark" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="p-4">
                                <div className="card overflow-hidden mt-2">
                                    <div className="text-center bg-primary position-relative">
                                        <div className="img-overlay"></div>
                                        <div className="position-relative pt-4 py-5 mb-1">
                                            <h5 className="text-white">Welcome!</h5>
                                            <p className="text-white-50 mb-0 fs-14">Sign up For a New Account.</p>
                                        </div>
                                    </div>
                                    <div className="card-body position-relative">
                                        <div className="p-4 mt-n5 bg-white card rounded pb-0">
                                            <form onSubmit={handleLoginSubmit}>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="first">Name</label>
                                                    <input type="text" onChange={handleonChange} className="form-control" id="first name" name="name" placeholder="First Name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="email">Email</label>
                                                    <input onChange={handleonChange} name="email"
                                                        type="email" className="form-control" id="email" placeholder="Enter Email" />
                                                </div>
                                                <div className="mb-2">
                                                    <label className="fs-14 mb-2" for="password">Password</label>
                                                    <input
                                                        name="password"
                                                        onChange={handleonChange}
                                                        type="password" className="form-control" id="password" placeholder="Enter Password" />
                                                </div>

                                                <div className="mt-4">
                                                    <button className="btn btn-primary w-100" type="submit">Sign up</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <div className="text-center plan-line">
                                                or sign up with
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center text-center my-3">
                                        <div className="col-lg-6">
                                            <ul className="list-unstyled btn-social-icon mb-0">
                                                <li className="list-inline-item">
                                                    <a href="javascpt:void(0ri)">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="fd">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="jgh)">
                                                        <i className="mdi mdi-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-white-50">
                                    <p>Have account already?
                                        <Link className="fw-bold text-white" as={Link} to="/login"> Log in</Link></p>

                                    {
                                        isLoading && <div className="text-center p-5">
                                            <Button variant="primary" disabled>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Loading...
                                            </Button>
                                        </div>
                                    }
                                    {
                                        user?.email && <Alert variant="success">
                                            This is a  alert—check it out!
                                        </Alert>
                                    }

                                    {
                                        authError && <Alert variant="danger">
                                            {authError}
                                        </Alert>
                                    }

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Signup;