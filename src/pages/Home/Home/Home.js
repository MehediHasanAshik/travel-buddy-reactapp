import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import PopularDestination from '../PopularDestinations/PopularDestination';
import TopPackage from '../TopPackage/TopPackage';

const Home = () => {
    return (
        <div>
            <Banner />
            <Information/>
            <PopularDestination />
            <TopPackage />
        </div>
    );
};

export default Home;