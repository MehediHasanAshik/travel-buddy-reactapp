import React from 'react';
import './BookPackage.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';

const BookPackage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div>
                <h3>Enter your information to Book Package</h3>
            </div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input placeholder='address' defaultValue="" {...register("address")} />
                <input placeholder='city' defaultValue="" {...register("city")} />
                <input placeholder='phone' defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default BookPackage;