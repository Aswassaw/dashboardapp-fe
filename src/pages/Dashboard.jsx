import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Charts from "../components/Charts";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="mb-4 d-flex justify-content-between">
          <h1>Dashboard</h1>
          <button className="btn btn-sm btn-danger" onClick={logout}>
            Logout
          </button>
        </div>

        <Charts />
      </div>
    </>
  );
}
