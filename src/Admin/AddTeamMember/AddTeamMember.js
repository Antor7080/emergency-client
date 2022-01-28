import axios from 'axios';
import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const AddTeamMember = () => {
    const [teamMemberData, setTeamMemberData] = useState();
    const { databaseUrl } = useFirebase()
    const url = databaseUrl('teamMember')
    const handleonChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newTeamMemberData = { ...teamMemberData };
        newTeamMemberData[field] = value;
        setTeamMemberData(newTeamMemberData);
    }
    const handleSubmit = e => {
        e.preventDefault();

        axios.post(url, teamMemberData)
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
                                            <h5 className="text-white">Welcome!</h5>
                                            <p className="text-white-50 mb-0 fs-14">Add Your New TeamMember.</p>
                                        </div>
                                    </div>
                                    <div className="card-body position-relative">
                                        <div className="p-4 mt-n5 bg-white card rounded pb-0">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="first">Name</label>
                                                    <input type="text" onChange={handleonChange} className="form-control" id="Name" name="name" placeholder="Name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="first">Designation</label>
                                                    <input type="text" onChange={handleonChange} className="form-control" id="first name" name="designation" placeholder="Designation" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="first">Image</label>
                                                    <input type="text" onChange={handleonChange} className="form-control" id="first name" name="img" placeholder="Image Link" />
                                                </div>


                                                <div className="mt-4">
                                                    <button className="btn btn-primary w-100" type="submit">Add</button>
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

export default AddTeamMember;