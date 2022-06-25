import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cxBazar from '../../../assets/images/cox-bazar (8).jpg'
import sajek from '../../../assets/images/sajek (3).jpg'
import './TopPackage.css'
const TopPackage = () => {
    return (
        <div className='main-cart'>
            <h2>Top Packages</h2>
            <Link to='/allpackages'>View All Packages<span>&#8594;</span></Link>
            <div className='top-cart'>
                <div className='container'>
                    <img src={cxBazar} alt="" className='img-fluid' />
                    <div className='overly'>
                        <h4>Cox's Bazar Sea Beach 3 Days 2 Nights <br />(10000) TK</h4>
                    </div>

                </div>
                <div className='container'>
                    <img src={sajek} alt="" className='img-fluid' />
                    <div className='overly'>
                    <h4>SajekValley-Khagrachari 2 Days 3 Nights<br />(5500) TK</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopPackage;