import React from 'react';

const SingleReview = ({rev}) => {
    const {name, img, review,designation}= rev;
    return (
        <div className={`carousel-item   ${rev?.className}`}>
            <div className="card bg-transparent reviews-box h-100">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card reviews-card">
                                <div className="card-body text-center">
                                    <img className="img-fluid" src={img} alt="" />
                                    <div className="mt-3">
                                        <h6 className="mb-0">{name}</h6>
                                        <p className="text-muted mb-0 fs-14">{designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h5 className="reviews-heading">Client Reviews</h5>
                            <div className="d-flex align-items-top">
                                <div className="flex-shrink-0">
                                    <img className="reviews-quote-1" src="images/quote.png" alt="" />
                                </div>
                                <div className="flex-grow-1 ms-2 mt-2">
                                    <p className="text-muted fs-14 mt-xl-4">{review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;