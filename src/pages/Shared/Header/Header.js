import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import useAuth from '../../../Hook/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }

    let activeStyle = {
        borderRadius: '5px',
        borderBottom: "2px solid black"
    };

    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <NavLink to='home'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Home</NavLink>
                <NavLink to='alldestinations'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >Destinations</NavLink>
                <NavLink to='allpackages'
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Packages</NavLink>
                <span>{user.displayName} </span>

                {!user?.displayName ? <NavLink to='login' className='bg-danger px-1 text-white rounded'>Login</NavLink> :
                    <Button variant='danger' size='sm' className='me-3' onClick={handleLogout}>Logout</Button>}
            </div>
        </div>
    );
};

export default Header;