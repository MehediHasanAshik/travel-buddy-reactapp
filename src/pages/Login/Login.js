import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_url = location.state?.from || '/allpackages';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
          navigate(redirect_url)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Sign In
                </Button>
            </Form>
            <p> Or</p>
            <Button variant='danger' className='mb-5' onClick={handleGoogleSignIn}> <i className="fa-brands fa-google"></i> Google SignIn</Button>
            <p>New on website? <Link className='text-decoration-none' to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;