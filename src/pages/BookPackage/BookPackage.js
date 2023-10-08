import React from "react";
import "./BookPackage.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BookPackage = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const phone = phoneRef.current.value;

    const newUser = {
      name: name,
      email: email,
      address: address,
      city: city,
      phone: phone,
    };

    // console.log(newUser)
    let ans = window.confirm("Do You Want to Book The Package?");
    if (ans) {
      fetch("https://reactravelbuddy.up.railway.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then(() => {
        navigate("/booked");
      });
    } else {
    }

    e.preventDefault();
    e.target.reset();
  };

  return (
    <div>
      <div>
        <h3>Enter your information to Book Package</h3>
      </div>
      <form className="shipping-form" onSubmit={handleSubmit}>
        <input
          defaultValue={user.displayName}
          {...register("name", { required: true })}
          ref={nameRef}
        />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
          ref={emailRef}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input
          placeholder="address"
          defaultValue=""
          {...register("address")}
          ref={addressRef}
        />
        <input
          placeholder="city"
          defaultValue=""
          {...register("city")}
          ref={cityRef}
        />
        <input
          placeholder="phone"
          defaultValue=""
          {...register("phone")}
          ref={phoneRef}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookPackage;
