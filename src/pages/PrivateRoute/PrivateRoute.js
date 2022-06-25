import React from 'react';
import { Navigate} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return (
        <div>
            {
                user.email ? children : <Navigate to="/login" />
            }
        </div>
    );
};

export default PrivateRoute;