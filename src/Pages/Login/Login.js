/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase.js';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, navigate);
        console.log(loginData.email, loginData.password);

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    const rediract = location.state?.from || "/";

    useEffect(() => {
        user?.email ? navigate(rediract) : "";
    }, [user, navigate, rediract]);


    return (
        <div >
            <body className="bg-account-pages pt-5">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="p-4">
                                <div className="card overflow-hidden mt-2">
                                    <div className="text-center bg-primary position-relative">
                                        <div className="img-overlay"></div>
                                        <div className="position-relative pt-4 py-5 mb-1">
                                            <h5 className="text-white">Welcome!</h5>
                                            <p className="text-white-50 mb-0 fs-14">Sign in to Continue to Oxhen..</p>
                                        </div>
                                    </div>
                                    <div className="card-body position-relative">
                                        <div className="p-4 mt-n5 bg-white card rounded pb-0">
                                            <form onSubmit={handleLoginSubmit}>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="user name">Email</label>
                                                    <input type="email" onChange={handleOnChange}
                                                        name="email"
                                                        className="form-control" id="user name" placeholder="Enter Email" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="user name">Email</label>
                                                    <input type="password" onChange={handleOnChange}
                                                        name="password"
                                                        className="form-control" placeholder="Enter Password" />
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id="auth-remember-check" />
                                                            <label className="form-check-label" for="auth-remember-check">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="text-sm-end">
                                                            <a href="recoverpw.html" className="text-muted fs-13"><i className="mdi mdi-lock me-1"></i> Forgot password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <button className="btn btn-primary w-100" type="submit">Log in</button>
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

                                                    <button style={{ background: "none", border: 'none' }} className='text-white' onClick={handleGoogleSignIn}>
                                                        <i className="mdi mdi-google"></i>
                                                    </button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="f">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-white-50">
                                    <p>Don't have an account ? <Link className="fw-bold text-white" as={Link} to="/signup">Sign Up</Link> </p>
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
                                    {
                                        user?.email && <Alert variant="success">
                                            You are Login
                                        </Alert>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </body>
        </div>
    );
};

export default Login;