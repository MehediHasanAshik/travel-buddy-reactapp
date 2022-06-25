import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import Rating from 'react-rating';
import { useLocation, useNavigate } from 'react-router-dom';
import './IndividualPackage.css'

const IndividualPackage = () => {

    const { state } = useLocation();
    const { detail } = state;
    const { p_name, p_price, p_rating, p_duration, p_departure, p_destination, p_breakfast, gallery } = detail;

    const [count, setCount] = useState(1);
    const navigate = useNavigate();
    // useEffect(() => {

    // }, [count])

    const handleClick = (isChanging) => {
        const totalAmount = document.getElementById('total-amount');
        const totalAmountNumber = parseInt(totalAmount.innerText);
        let total = 0;
        if (isChanging) {
            setCount(prevCount => prevCount + 1)
            total = totalAmountNumber + p_price;
        } else {
            setCount(prevCount => Math.max(prevCount - 1, 1));
            if (totalAmountNumber > p_price) {
                total = totalAmountNumber - p_price;
            }
        }
        totalAmount.innerText = total;

    }

    const handleBooking = () => {
        navigate('/bookpackage');
    }

    return (
        <div className='cart-style'>
            <div className='img-gallery'>
                <h2>Book your package with <b>Travel Buddy</b></h2>
                <ReactImageGallery items={gallery} />
            </div>
            <div className='pkg-cart'>
                <div className='pkg-desc'>
                    <h2>{p_name}</h2>
                    <h3>Price: {p_price} TK</h3>
                    <p>{p_duration}</p>
                    <p>Departure: {p_departure}</p>
                    <p>Destination: {p_destination}</p>
                    <p>Breakfast: {p_breakfast}</p>
                    <p><Rating
                        initialRating={p_rating}
                        emptySymbol="fa fa-star-o fa"
                        fullSymbol="fa fa-star fa"
                        readonly
                    /></p>
                </div>
                <div className='pkg-detail'>
                    Total Persons:
                    <div className='pkg-buy'>
                        <button
                            onClick={() => handleClick(false)}
                            className="btn btn-default"><i className="fas fa-minus"></i></button>
                        <input id="input-number" type="number" min="0" className="form-control text-center" value={count} readOnly />
                        <button
                            onClick={() => handleClick(true)}
                            className="btn btn-default"><i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <p>Total Amount: <span id='total-amount'><b>{p_price}</b></span> TK</p>
                    <button className='btn btn-danger' onClick={handleBooking}>Book Package</button>
                </div>
            </div>
        </div>
    );
};

export default IndividualPackage;