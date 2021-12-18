import React from 'react';

const AddTeamMember = () => {
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
                                            <p className="text-white-50 mb-0 fs-14">Sign up For a New Account.</p>
                                        </div>
                                    </div>
                                    <div className="card-body position-relative">
                                        <div className="p-4 mt-n5 bg-white card rounded pb-0">
                                            <form /* onSubmit={handleLoginSubmit} */>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="first">Name</label>
                                                    <input type="text" /* onChange={handleonChange} */ className="form-control" id="first name" name="name" placeholder="First Name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="fs-14 mb-2" for="email">Email</label>
                                                    <input /* onChange={handleonChange}  */name="email"
                                                        type="email" className="form-control" id="email" placeholder="Enter Email" />
                                                </div>
                                                <div className="mb-2">
                                                    <label className="fs-14 mb-2" for="password">Password</label>
                                                    <input
                                                        name="password"
                                                      /*   onChange={handleonChange} */
                                                        type="password" className="form-control" id="password" placeholder="Enter Password" />
                                                </div>

                                                <div className="mt-4">
                                                    <button className="btn btn-primary w-100" type="submit">Sign up</button>
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