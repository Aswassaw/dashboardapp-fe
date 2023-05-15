import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="bg-primary navbar py-3"
    >
      <div className="container">
        <Link
          data-cy="header-title"
          className="navbar-brand fs-4 text-white fw-bold"
          to={"/"}
        >
          DASHBOARD APP
        </Link>
      </div>
    </nav>
  );
}
