import React, { useEffect, useState } from 'react';
import SingleMember from '../../../Components/SingleMember/SingleMember';
import useFirebase from '../../../Hooks/useFirebase';

const Team = () => {
    const [teamMember, setTeamMember] = useState();
    const { databaseUrl } = useFirebase();
    const url = databaseUrl('teamMember')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamMember(data))
    }, [url])
    return (
        <div>
            <section className="section team">


                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="text-center mb-5">
                                <h2 className="heading">Team</h2>
                                <p className="text-muted fs-17">Build responsive, mobile-first projects on the web
                                    with the world's most popular front-end component library.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {
                            teamMember?.map(member => <SingleMember
                                key={member._id}
                                member={member}
                            ></SingleMember>)
                        }




                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;