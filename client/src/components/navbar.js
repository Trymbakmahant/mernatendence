import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navebar-brand">
        HOME
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/signup" className="nav-link">
              registration
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Scan" className="nav-link">
              Attendance
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link">
              Create User
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link" onClick={handleLogout}>
              Logout
            </Link>
          </li>
          <li>
            <Link to="/attendence" className="nav-link">
              list of employees
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
