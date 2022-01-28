import React, { useEffect, useState } from 'react';
import SingleReview from '../../../Components/SingleReview/SingleReview';
import useFirebase from '../../../Hooks/useFirebase';
const Review = () => {
    const [reviews, setRewviews] = useState()
    const { databaseUrl } = useFirebase();
    const url = databaseUrl('reviews')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRewviews(data))
    }, [url])
    return (
        <div>
            <section className="section reviews" id="review">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-center mb-5">
                                <h2 className="heading">What they say about us honest reviews</h2>
                                <p className="text-muted fs-17">Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum mauris sit amet arcu
                                    fringilla auctor In eleifend maximus nisi sed vulputate.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators mb-0">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="" aria-current="true"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className="" aria-current="true"></button>
                                </div>

                                <div className="carousel-inner">
                                    {
                                        reviews?.map(rev => <SingleReview
                                            key={rev._id}
                                            rev={rev}
                                        ></SingleReview>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;