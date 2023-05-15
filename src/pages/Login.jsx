import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { createToast } from "./../utils/createToast";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setisLoading(true);

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          username: form.username,
          password: form.password,
        }
      );

      localStorage.setItem("jwt", res.data.token.jwt);
      createToast("Login Success");

      navigate("/");
    } catch (error) {
      createToast("Login Failed", "error");

      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  const inputChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <h1>Login</h1>

          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={inputChangeHandler}
              />
            </div>
            {isLoading ? (
              <button
                className="btn btn-primary w-100 text-light mb-2"
                type="submit"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-100 text-light mb-2"
              >
                Login
              </button>
            )}
          </form>
          <p className="text-center text-secondary mt-2">
            Don&apos;t have an account?{" "}
            <Link className="text-primary text-decoration-none" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
