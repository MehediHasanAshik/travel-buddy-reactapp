import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import not_found from '../../assets/images/404.jpg'

const NotFound = () => {
    return (
        <div className='w-75 mx-auto pt-4 pb-4'>
            <img src={not_found} alt="" className='w-75' />
            <br />
            <Link to='/'><Button variant='danger'>Home</Button></Link>
        </div>
    );
};

export default NotFound;