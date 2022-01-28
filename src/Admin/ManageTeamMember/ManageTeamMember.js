import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';

const ManageTeamMember = () => {
    const [teamMember, setTeamMember] = useState();
    const { databaseUrl } = useFirebase();
    const url = databaseUrl('teamMember')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamMember(data))
    }, [url]);


    const handleDeleteTeamMember = (id) => {
        const proceed = window.confirm("Are you sure want to delete");
        if (proceed) {
            const url = databaseUrl(`teamMember/${id}`);
            console.log(url);
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {

                        const remainingMember = teamMember.filter((member) => member._id !== id);
                        setTeamMember(remainingMember);
                    }
                });
        }

    };

    return (



        <div className="bg-account-pages">
            <div className="container">


                <div className="text-center pt-5">
                    <table className="table table-bordered table-hover mt-5 table-da  fw-bold" style={{ color: "white" }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teamMember?.map(data => <tr>
                                    <th scope="row">{teamMember.indexOf(data)}</th>
                                    <td>{data?.name}</td>
                                    <td>{data.designation}</td>
                                    <td><button onClick={() => handleDeleteTeamMember(data._id)}
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

export default ManageTeamMember;