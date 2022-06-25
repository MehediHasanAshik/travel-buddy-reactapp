import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/cox-bazar (2).jpg'
import './Information.css'

const Information = () => {
    return (
        <div className='info-cart'>
            <div>
                <h2>Welcome to</h2>
                <h1>Travel Buddy</h1>
                <small>Your Best Friend on Your Travel Journey</small>
                <p>We offer you the best Places and Deals in Bangladesh. <br /> We have over 10,000 happy cutomers.</p>
                <Link to='/allpackages'>Book Now<span>&#8594;</span></Link>
            </div>
            <div className='img-cart'>
                <img src={img} alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default Information;