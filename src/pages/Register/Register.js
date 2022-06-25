import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Register = () => {
    const {signInUsingGoogle} = useAuth();
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder=" Confirm Password" />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Register
                </Button>
            </Form>
            <p> Or</p>
            <Button variant='danger' className='mb-5' onClick={signInUsingGoogle}> <i className="fa-brands fa-google"></i> Google SignIn</Button>
            <p>Have an Account? <Link className='text-decoration-none' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;