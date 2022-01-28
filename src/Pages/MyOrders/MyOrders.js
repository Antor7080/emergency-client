import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const MyOrders = () => {

    const [order, setOrder] = useState();
    const { databaseUrl, user } = useFirebase();
    const url = databaseUrl('orders')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [url]);

    const [singleUserData, setSingleUserData] = useState();

    useEffect(() => {
        const singleUserOrder = order?.filter((s) => s?.email === user.email);

        setSingleUserData(singleUserOrder);
    }, [order, user.email])

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure want to delete");
        if (proceed) {
            const url = databaseUrl(`orders/${id}`);
            console.log(url);
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = order.filter((order) => order._id !== id);
                        setOrder(remainingOrders);
                    }
                });
        }
    }



    return (
        <div className="bg-account-pages">
            <div className="container">


                <div className="text-center pt-5">
                    <table className="table table-bordered table-hover mt-5 table-da mb-5  fw-bold" style={{ color: "white" }}>
                        <thead>
                            <tr>
                                <th scope="col">SN</th>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">NUMBER</th>
                                <th scope="col">ACTION</th>
                                <th scope="col">DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                singleUserData?.map(data => <tr>
                                    <th scope="row">{singleUserData.indexOf(data)}</th>
                                    <td>{data?.displayName}</td>
                                    <td>{data?.email}</td>
                                    <td>{data.price}</td>
                                    <td>{data.number}</td>
                                    <td> {data.status}</td>
                                    <td><button onClick={() => handleDeleteOrder(data._id)}
                                        className="btn btn-danger">X</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyOrders;