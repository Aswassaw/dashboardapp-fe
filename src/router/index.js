import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "../pages/Dashboard";
import Register from "./../pages/Register";
import Login from "./../pages/Login";

function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("jwt");

  if (accessToken) {
    return children;
  }
  return <Navigate to="/login" />;
}

function AuthRoute({ children }) {
  const accessToken = localStorage.getItem("jwt");

  if (!accessToken) {
    return children;
  }
  return <Navigate to="/" />;
}

export default function router() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/login">
          <Route
            index
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
        </Route>
        <Route path="/register">
          <Route
            index
            element={
              <AuthRoute>
                <Register />
              </AuthRoute>
            }
          />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
