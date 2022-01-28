import React, { useEffect, useState } from 'react';
import SingleServices from '../../../../Components/SingleServices/SingleServices';
import useFirebase from '../../../../Hooks/useFirebase';

const Pricing = () => {

    const [services, setServices] = useState()
    const { databaseUrl } = useFirebase();
    const url = databaseUrl('services')

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url])
    return (
        <div>
            <section className="section pricing" id="pricing">
                <div className="bg-shape"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-center mb-5">
                                <h2 className="heading">Pricing</h2>
                                <p className="text-muted fs-17">Donec nec nibh vestibulum, fringilla ante nec, convallis turpis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus tristique nibh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services?.map(data => <SingleServices
                                key={data._id}
                                data={data}
                            ></SingleServices>)
                        }
                    </div>
                </div>
            </section>
            <section className="section cta">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div data-aos="fade-down" data-aos-duration="1800">
                                <div className="cta-heading">Today Offer <span className="mb-3">
                                    <span className="counter_value" data-target="37">0</span>
                                    <span>% Off</span>
                                </span>!
                                </div>
                                <p>Now that we've aligned the details, it's time to get things mapped out and organized. Now that we've aligned the details.</p>
                                <p className="fs-18">Limited signup only. Order today before the discount period end.</p>
                            
                                <a className="btn btn-primary" href="/home#contact">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;