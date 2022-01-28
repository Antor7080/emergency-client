import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const PlaceOrder = () => {

    const { user, databaseUrl } = useFirebase();
    const [placeOrder, setPlaceOrder] = useState();
    const [number, setNumber] = useState();
    const [date, setDate] = useState();
    const { id } = useParams()
    const url = databaseUrl(`services/${id}`);

    const { email, displayName, } = user;
   
const price= placeOrder?.price;
const type = placeOrder?.type;



    const postUrl = databaseUrl('orders');

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(info => setPlaceOrder(info))
    }, [url])




    const fromData = { email, displayName, price, type, status: 'Pending', number, date };
    console.log(fromData);
    const handleOrderSubmit = e => {
        e.preventDefault();
        axios.post(postUrl, fromData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully');
                }
            })
    }
    return (
        <div className='bg-account-pages'>
            <div className="container ">
                <h1 className="text-center text-light fw-bold mt-5 pt-5">Confirm Your Order</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="p-2">
                            <img className="img-fluid rounded mt-5 mb-3" src={placeOrder?.img} alt="" />
                            <p style={{ color: 'white', fontWeight: 'bold' }} className="text-center t mx-3">{placeOrder?.details}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="purchases-information mt-5">
                            <h4 style={{ color: 'white', fontWeight: 'bold' }} className="text-center">Give Your Information</h4>
                            <div className='mb-5'>
                                <form onSubmit={handleOrderSubmit}>


                                    <div className="mb-3">
                                        <label className="fs-14 text-warning mb-2" >Your Number</label>
                                        <input type="number" required onChange={(e) => setNumber(e.target.value)}
                                            name="number"
                                            className="form-control" id="" placeholder='Your Phone Number' />
                                    </div>

                                    <div className="mb-3">
                                        <label className="fs-14 text-warning mb-2">Selet Date</label>
                                        <input type="date" required onChange={(e) => setDate(e.target.value)}
                                            name="date"
                                            className="form-control" />
                                    </div>

                                    <div className="mt-4">
                                        <button className="btn btn-warning w-100" type="submit">Confrim Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;