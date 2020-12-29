import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../svg/bars-solid.svg";
import Close from "../svg/times-solid.svg";

function Header() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={toggleMenu}>
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">SAV</Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li class="dropdown">
          <Link class="dropbtn" to="/solution">
            Service
          </Link>
          <div class="dropdown-content">
            <Link to="/security">Security & Surveillance</Link>
            <Link to="/survey">Surveying and Mapping</Link>
            <Link to="/inspection">Inspection</Link>
            <Link to="/delivery">Drone Delivery</Link>
          </div>
        </li>
        <li class="dropdown">
          <Link class="dropbtn" to="/application">
            Application
          </Link>
          <div class="dropdown-content">
            <Link to="/border">Border Security</Link>
            <Link to="/railways">Railways</Link>
            <Link to="/agriculture">Agriculture</Link>
            <Link to="/solar">Solar Energy</Link>
            <Link to="/wind">Wind Energy</Link>
            <Link to="/mining">Mining</Link>
            <Link to="/construction">Construction & Real State</Link>
            <Link to="/disaster">Disaster Management</Link>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li onClick={toggleMenu}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
