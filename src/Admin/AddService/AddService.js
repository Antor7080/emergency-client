import axios from 'axios';
import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const AddService = () => {
    const [price, setPrice] = useState();
    const [type, setType] = useState('');
    const [features1, setFeatures1] = useState(false);
    const [features2, setFeatures2] = useState(false);
    const [features3, setFeatures3] = useState(false);
    const [features4, setFeatures4] = useState(false);
    const [features5, setFeatures5] = useState(false);
    const { databaseUrl } = useFirebase()
    const url = databaseUrl('services')
    const handleSubmit = e => {
        e.preventDefault();
        const formData = { type, price, features1, features2, features3, features4, features5 };
        console.log(formData);
        axios.post(url, formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                }
            })
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
                        <div className="col-md-8 col-lg-10">
                            <div className="p-4">
                                <div className="card overflow-hidden mt-2">
                                    <div className="text-center bg-primary position-relative">
                                        <div className="img-overlay"></div>
                                        <div className="position-relative pt-4 py-5 mb-1">
                                            <h5 className="text-white">Add New Service </h5>
                                            <p className="text-white-50 mb-0 fs-14">Give information to add new service</p>
                                        </div>
                                    </div>
                                    <div className="card-body position-relative">
                                        <div className="p-4 mt-n5 bg-white card rounded pb-0">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="first">Price</label>
                                                    <input type="number" min={1000} onChange={e => setPrice(e.target.value)} className="form-control" id="first name" name="Price" placeholder="Price" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="first">Type</label>
                                                    <input type="text" onChange={e => setType(e.target.value)} className="form-control" id="first name" name="Type" placeholder="Type" required />
                                                </div>
                                                <small className='px-5 fw-bold'>Select options for new sevices</small>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" onClickCapture={e => setFeatures1(e.target.checked)} type="checkbox" id="flexSwitchCheckDefault" name="features1" />
                                                    <label className="form-check-label" for="flexSwitchCheckDefault">Venues</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" onClickCapture={e => setFeatures2(e.target.checked)} type="checkbox" id="flexSwitchCheckDefault" name="features2" />
                                                    <label className="form-check-label" for="flexSwitchCheckDefault">Photographers</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" onClickCapture={e => setFeatures3(e.target.checked)} type="checkbox" id="flexSwitchCheckDefault" name="features3" />
                                                    <label className="form-check-label" for="flexSwitchCheckDefault">Makeup Artists</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" onClickCapture={e => setFeatures4(e.target.checked)} type="checkbox" id="flexSwitchCheckDefault" name="features4" />
                                                    <label className="form-check-label" for="flexSwitchCheckDefault">Lighting Or Fireworks</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" onClickCapture={e => setFeatures5(e.target.checked)} type="checkbox" id="flexSwitchCheckDefault" name="features5" />
                                                    <label className="form-check-label" for="flexSwitchCheckDefault">Accessories</label>
                                                </div>

                                                <div className="mt-4 ">
                                                    <button className="btn btn-primary w-100" type="submit">Click Here to Add</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddService;