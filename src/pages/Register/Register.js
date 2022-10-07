import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import login from "../../assets/images/login.jpg";
import { Alert, CircularProgress } from "@mui/material";

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const { isLoading, user, error, registerUser } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  console.log(registerData)

  const handleFormSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert(`Your password didn't match`);
      return;
    }
    registerUser(registerData.email, registerData.password, registerData.name);

    e.preventDefault();
  };

  return (
    <div className="d-lg-flex justify-content-around sm-none">
      <div className="p-5 mx-auto pt-4">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group
            onBlur={handleOnBlur}
            className="mb-3 mt-3"
            controlId="formBasicName"
          >
            <Form.Label>Display Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group
            onBlur={handleOnBlur}
            className="mb-3 mt-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            onBlur={handleOnBlur}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group
            onBlur={handleOnBlur}
            className="mb-3"
            controlId="formBasicPassword2"
          >
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password2"
              placeholder=" Confirm Password"
            />
          </Form.Group>

          <Button variant="danger" type="submit">
            Register
          </Button>
        </Form>

        <br />

        {isLoading && <CircularProgress />}
        {user.email && (
          <Alert sx={{ width: "75%", margin: "auto" }} severity="success">
            You Have Successfully Logged In
          </Alert>
        )}
        {error && (
          <Alert sx={{ width: "75%", margin: "auto" }} severity="error">
            {error}
          </Alert>
        )}

        <p>
          Have an Account?{" "}
          <Link className="text-decoration-none" to="/login">
            Login
          </Link>
        </p>
      </div>
      <div className="d-lg-flex align-items-center">
        <img width="75%" src={login} alt="" />
      </div>
    </div>
  );
};

export default Register;
