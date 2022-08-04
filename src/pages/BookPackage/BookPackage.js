import React from 'react';
import './BookPackage.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { useRef } from 'react';
import { useEffect } from 'react';

const BookPackage = () => {
    const { register, reset, formState: { errors } } = useForm();
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
            "name": name,
            "email": email,
            "address": address,
            "city": city,
            "phone": phone
        };

        console.log(newUser)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(()=> {
                alert('Your data has been inserted.')
            })

        e.preventDefault();
        e.target.reset();
    }

    return (
        <div>
            <div>
                <h3>Enter your information to Book Package</h3>
            </div>
            <form className='shipping-form' onSubmit={handleSubmit}>
                <input defaultValue={user.displayName} {...register("name", { required: true })} ref={nameRef} />
                <input defaultValue={user.email} {...register("email", { required: true })} ref={emailRef} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='address' defaultValue="" {...register("address")} ref={addressRef} />
                <input placeholder='city' defaultValue="" {...register("city")} ref={cityRef} />
                <input placeholder='phone' defaultValue="" {...register("phone")} ref={phoneRef} />

                <input type='submit' value='Submit' />
            </form>

            {/* <form className='shipping-form' onSubmit={handleSubmit}>
                <input type="text" defaultValue={user.displayName} ref={nameRef} />
                <input type="email" name="" id="" defaultValue={user.email} ref={emailRef} />
                <input placeholder='address' type="text" name="" id="" ref={addressRef} />
                <input placeholder='city' type="text" name="" id="" ref={cityRef} />
                <input placeholder='phone' type="phone" name="" id="" ref={phoneRef} />

                <input type="submit" value="Submit" />

            </form> */}
        </div>
    );
};

export default BookPackage;