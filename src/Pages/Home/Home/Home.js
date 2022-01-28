import React from 'react';
import Banner from '../Banner/Banner';
import Connect from '../Connect/Connect';
import Features from '../Features/Features';
import Review from '../Review/Review';
import Team from '../Team/Team';
import Pricing from './Pricing/Pricing';
import Contact from './../Contact/Contact.js'
import Navbar from '../../Shared/Header/Navbar';

const Home = () => {
    return (
        <div >
          <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Connect></Connect>
            <Review></Review>
            <Pricing></Pricing>
            <Team></Team>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;