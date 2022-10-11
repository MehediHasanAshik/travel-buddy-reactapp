import React from "react";
import useAuth from "../../Hook/useAuth";
import congrats from "../../assets/images/congrats.jpg";

const Booked = () => {
  const { user } = useAuth();
  return (
    <div className="d-lg-flex justify-content-around align-items-center">
      <div className="py-4 px-3">
        <h2>
          Congratulations, <span className="text-danger">{user.displayName}</span>
        </h2>
        <h4>
          You Have Successfully Booked the Package. <br /> One of our moderator
          will contact to you soon.
        </h4>
      </div>
      <div>
        <img src={congrats} alt="" className="img-fluid p-3" />
      </div>
    </div>
  );
};

export default Booked;
