import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container pt-2 pb-1'>
            <div className='row d-flex justify-content-center align-items-center pb-3'>
                <div className='col-12 col-lg-4 col-md-6'>
                    <h1>Travel Buddy</h1>
                    <small>Your Best Friend on Your Travel Journey</small>
                </div>
                <div className='col-12 col-lg-4 col-md-6'>
                    <p>Follow us on</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <p className='fb-icon'><i className="fa-brands fa-2x fa-facebook-square"></i></p>
                        <p className='ms-5 me-5 ins-icon'><i className="fa-brands fa-2x fa-instagram-square"></i></p>
                        <p className='tw-icon'><i className="fa-brands fa-2x fa-twitter-square"></i></p>
                    </div>
                </div>
                <div className='col-12 col-lg-4 d-flex justify-content-center'>
                    <a className='m-2 text-decoration-none' href="#">Our Policies</a>
                    <a className='m-2 text-decoration-none' href="#">Contact Us</a>
                    <a className='m-2 text-decoration-none' href="#">About Us</a>
                </div>
            </div>
            <p className='text-muted'>&#169;2020 - Travel Buddy </p>
        </div>
    );
};

export default Footer;