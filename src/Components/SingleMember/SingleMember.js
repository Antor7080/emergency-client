import React from 'react';

const SingleMember = ({ member }) => {
    const { name, img, designation } = member
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="team-card">
                <div className="team-card-img">
                    <img className="img-fluid" src={img} alt="imlage" />
                    <div className="team-social-icons">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/Antor15/" target="_blank" rel="noreferrer">
                                    <i className="mdi mdi-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.twitter.com/Antor7080/" target="_blank" rel="noreferrer">
                                    <i className="mdi mdi-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/Antor7080/" target="_blank" rel="noreferrer">
                                    <i className="mdi mdi-linkedin"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/jh.antor/" target="_blank" rel="noreferrer">
                                    <i className="mdi mdi-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="team-card-text-2">
                    <h5 className="fw-bold mb-0">{name}</h5>
                    <p className="mb-0 fs-13 text-muted">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleMember;