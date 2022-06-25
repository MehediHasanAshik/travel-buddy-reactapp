import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SinglePackageDetail.css'

const SinglePageDetail = ({detail}) => {
    const { p_name, p_price, p_img } = detail;

    const navigate = useNavigate()
    const handleSinglePackage = () => {
        navigate('/individualpackage', { state: {detail} })
    }

    return (
        <div>
            <div className='detail' onClick={handleSinglePackage}>
                <img src={p_img} alt="" className='img-fluid' />
                <h2>{p_name}</h2>
                <h3>Price: {p_price} TK</h3>
            </div>
        </div>
    );
};

export default SinglePageDetail;