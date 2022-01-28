import React from 'react';
import { Link } from 'react-router-dom';

const SingleServices = ({ data }) => {
    const { type, price, features1, features2, features3, features4, features5, features6, _id } = data;
    return (
        <div className="col-lg-4 col-md-6">
            <div data-aos="fade-right" data-aos-duration="1800">
                <div className="card pricing-box mx-1 mt-4 ">
                    {
                        features6 ? <span className="pricing-lable">populer</span> : ''
                    }
                    <div className="card">
                        <div className="card-body">
                            <h6>{type}</h6>
                            <h1 className="mb-0 pt-2 fw-bold">${price} <sub className="fs-14 fw-normal">/-Monthly</sub></h1>
                        </div>
                    </div>
                    <div className="p-4">
                        <ul className="list-unstyled">
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shring-0">
                                        <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-soft-primary">
                                                {
                                                    features1 ? <i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>
                                                        :
                                                        <i className="mdi mdi-close-circle-outline  text-danger"></i>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0 fs-14">Venues</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shring-0">
                                        <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-soft-primary">
                                                {
                                                    features2 ? <i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>
                                                        :
                                                        <i className="mdi mdi-close-circle-outline  text-danger"></i>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0 fs-14">Photographers</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shring-0">
                                        <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-soft-primary">
                                                {
                                                    features3 ? <i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>
                                                        :
                                                        <i className="mdi mdi-close-circle-outline  text-danger"></i>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0 fs-14">Makeup Artists</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shring-0">
                                        <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-soft-primary">
                                                {
                                                    features4 ? <i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>
                                                        :
                                                        <i className="mdi mdi-close-circle-outline  text-danger"></i>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0 fs-14">Lighting Or Fireworks</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="flex-shring-0">
                                        <div className="avatar-xs">
                                            <div className="avatar-title rounded-circle bg-soft-primary">
                                                {
                                                    features5 ? <i className="mdi mdi-checkbox-marked-circle-outline text-primary"></i>
                                                        :
                                                        <i className="mdi mdi-close-circle-outline  text-danger"></i>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0 fs-14">Accessories</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="d-grid">
                            <Link to={`/place-order/${_id}`}>
                                <button className="btn btn-outline-primary">
                                    Choose Plan
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;