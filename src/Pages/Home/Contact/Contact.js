import React from 'react';
import img from '../../../image/map.png'

const Contact = () => {
    return (
        <div>
            <section className="section contact" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center mb-5">
                                <h2 className="heading">Contact Us</h2>
                                <p className="text-muted mt-2 fs-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center gy-3">
                        <div className="col-lg-6">
                            <div data-aos="fade-right" data-aos-duration="1800">
                                <div className="card">
                                    <div className="card-body">
                                        <div >
                                            <img className='img-fluid' src={img} alt="" /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div data-aos="fade-left" data-aos-duration="1800">
                                <form method="post" className="contact-form" name="myForm" id="myForm">
                                    <span id="error-msg"></span>
                                    <div className="row rounded-3 py-3">
                                        <div className="col-lg-12">
                                            <div className="position-relative mb-3">
                                                <span className="input-group-text"><i className="mdi mdi-account-outline"></i></span>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Enter your name*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="position-relative mb-3">
                                                <span className="input-group-text"><i className="mdi mdi-email-outline"></i></span>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Enter your email*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="position-relative mb-3">
                                                <span className="input-group-text"><i className="mdi mdi-file-document-outline"></i></span>
                                                <input name="subject" id="subject" type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="position-relative mb-3">
                                                <span className="input-group-text align-items-start"><i className="mdi mdi-comment-text-outline"></i></span>
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Enter your message*"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="text-end">
                                                <input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Message" />
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;