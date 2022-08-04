import React, { useEffect, useState } from 'react';
import SinglePageDetail from '../SinglePackageDetail/SinglePackageDetail';
import './AllPackages.css'

const AllPackages = () => {

    const [packages, setPackages] = useState({});

    useEffect(() => {
        fetch('https://stormy-mesa-42639.herokuapp.com/package_detail')
        // fetch('package_detail.json')
            .then(res => res.json())
            .then(data => setPackages(data[0]))
    }, []);


    return (
        <div>
            <h1>Available Packages</h1>
            <div className='single-cart'>
                {packages?.details?.map(detail => <SinglePageDetail
                    key={detail.p_id}
                    detail={detail} />)}
            </div>
        </div>
    );
};

export default AllPackages;