import React, { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import Rating from "react-rating";
import { useLocation, useNavigate } from "react-router-dom";
import "./IndividualPackage.css";

const IndividualPackage = () => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(1);

  const navigate = useNavigate();

  const { state } = useLocation();
  const { detail } = state;
  const {
    p_name,
    p_price,
    p_rating,
    p_duration,
    p_departure,
    p_destination,
    p_breakfast,
    gallery,
  } = detail;

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setTotal((prevPrice) => prevPrice - p_price);
    }
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setTotal((prevPrice) => prevPrice + p_price);
  };

  const handleBooking = () => {
    navigate("/bookpackage");
  };

  return (
    <div className="cart-style">
      <div className="img-gallery">
        <h2>
          Book your package with <b>Travel Buddy</b>
        </h2>
        <ReactImageGallery items={gallery} />
      </div>
      <div className="pkg-cart">
        <div className="pkg-desc">
          <h2>{p_name}</h2>
          <h3>Price: {p_price} TK</h3>
          <p>{p_duration}</p>
          <p>Departure: {p_departure}</p>
          <p>Destination: {p_destination}</p>
          <p>Breakfast: {p_breakfast}</p>
          <p>
            <Rating
              initialRating={p_rating}
              emptySymbol="fa fa-star-o fa"
              fullSymbol="fa fa-star fa"
              readonly
            />
          </p>
        </div>
        <div className="pkg-detail">
          Total Persons:
          <div className="pkg-buy">
            <button onClick={handleDecrement} className="btn btn-default">
              <i className="fas fa-minus"></i>
            </button>

            <h4>{count}</h4>

            <button onClick={handleIncrement} className="btn btn-default">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <p>
            Total Amount:
            <span id="total-amount">
              <b>{count === 1 ? p_price : total}</b>
            </span>
            TK
          </p>
          <button className="btn btn-danger" onClick={handleBooking}>
            Book Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualPackage;
