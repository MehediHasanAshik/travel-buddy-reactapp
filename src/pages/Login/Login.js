import { Alert, CircularProgress } from "@mui/material";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import login from "../../assets/images/login.jpg";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInUsingGoogle, isLoading, user, loginUser, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const privateLink = location?.state?.from || "";

  const handleGoogleSignIn = (e) => {
    signInUsingGoogle(navigate, privateLink);

    e.preventDefault();
  };

  const handleOnSubmit = (e) => {
    loginUser(email, password, navigate, privateLink);

    e.preventDefault();
  };

  return (
    <div className="d-lg-flex justify-content-around sm-none">
      <div className="p-5 mx-auto pt-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="danger" type="submit">
            Sign In
          </Button>
        </Form>
        <p> Or</p>
        <Button variant="danger" className="mb-5" onClick={handleGoogleSignIn}>
          <i className="fa-brands fa-google"></i> Google SignIn
        </Button>
        <br />
        {isLoading && <CircularProgress />}
        {user.email && (
          <Alert sx={{ width: "75%", margin: "auto" }} severity="success">
            You Have Successfully Logged In{" "}
          </Alert>
        )}
        {error && (
          <Alert sx={{ width: "75%", margin: "auto" }} severity="error">
            {error}
          </Alert>
        )}
        <p>
          New on website?{" "}
          <Link className="text-decoration-none" to="/register">
            Register
          </Link>
        </p>
      </div>
      <div className="d-lg-flex align-items-center">
        <img width="75%" src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;
