import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <h3>LOGO</h3>
      </div>
      <div className="nav__header">
        <Link to="/" className="link">
          <h3>Home</h3>
        </Link>
        <Link to="/about" className="link">
          <h3> About</h3>
        </Link>
        <Link to="/product" className="link">
          <h3> Product</h3>
        </Link>
        <Link to="/service" className="link">
          <h3> Service</h3>
        </Link>
        <Link to="/application" className="link">
          <h3> Application</h3>
        </Link>
        <Link to="/contactus" className="link">
          <h3>ContactUs</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
