import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const ManageService = () => {

    const [services, setServices] = useState();
    const { databaseUrl } = useFirebase();
    const url = databaseUrl('services')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url]);
    const handleDeleteService = (id) => {
        const proceed = window.confirm("Are you sure want to delete");
        if (proceed) {
            const url = databaseUrl(`services/${id}`);
            console.log(url);
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {

                        const remainingServices = services.filter((service) => service._id !== id);
                        setServices(remainingServices);
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
                                <th scope="col">Type</th>
                                <th scope="col">Price</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services?.map(data => <tr>
                                    <th scope="row">{services.indexOf(data)}</th>
                                    <td>{data?.type}</td>
                                    <td>{data.price}</td>
                                    <td><button onClick={() => handleDeleteService(data._id)}
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

export default ManageService;