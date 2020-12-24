import React from "react";
import Logo from "../images/ppLogo.jpg";
import { Link } from "react-router-dom";

function Navbar(props) {
  const isActive = (path) => {
    if (props.match.path === path) {
      return { color: "red" };
    } else {
      return { color: "black" };
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link
        to="/"
        style={{ color: "red", fontFamily: "sans-serif" }}
        className="navbar-brand"
      >
        <img style={{ height: "60px", width: "80px" }} src={Logo} alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" style={isActive("/")}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-link"
              style={isActive("/services")}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-link"
              style={isActive("/portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutus"
              className="nav-link"
              style={isActive("/aboutus")}
            >
              About US
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              style={isActive("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
