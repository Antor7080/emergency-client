import axios from 'axios';
import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const AddAdmin = () => {
    const [email, setEmail] = useState();
    const { databaseUrl } = useFirebase()
    const url = databaseUrl('users/admin')
    const data = { email: email }
    const handleSubmit = e => {
        e.preventDefault()
        axios.put(url, data)
            .then(res => {
                if (res.data.updateCount) {
                    alert('Added Successfully');
                }
            })
        console.log(email);
    };
    return (
        <div className="bg-account-pages" style={{ paddingTop: "145px", paddingBottom: '100px' }}>
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-10">
                        <div className="p-4">
                            <div className="card overflow-hidden mt-2">
                                <div className="text-center bg-primary position-relative">
                                    <div className="img-overlay"></div>
                                    <div className="position-relative pt-4 py-5 mb-1">
                                        <h5 className="text-white">Add New Admin </h5>
                                        <p className="text-white-50 mb-0 fs-14">Give information to add new Admin</p>
                                    </div>
                                </div>
                                <div className="card-body position-relative">
                                    <div className="p-4 mt-n5 bg-white card rounded pb-0">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="fs-14 mb-2" for="first">Enter a Email to Make Admin </label>
                                                <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="first name" name="email" placeholder="Enter a Email" required />
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
    );
};

export default AddAdmin;

/* 




*/