import React from "react";
import Logo from "../images/ppLogo.jpg";
import { Link } from "react-router-dom";
import { PhoneOutlined } from "@ant-design/icons";
import "./Navbar.css";

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
        style={{ fontFamily: "sans-serif" }}
        className="navbar-brand"
      >
        <img style={{ height: "50px", width: "70px" }} src={Logo} alt="logo" />{" "}
        <small className="font-weight-bold">The Perfect Painters</small>
      </Link>
      <button
        className="navbar-toggler navbar-toggler-left collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
        <span class="my-1 mx-2 close">X</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <div id="sideBarHeader">
            <div
              className="jumbotron jumbotron-fluid row px-3 m-0 text-dark"
              style={{ paddingTop: "9px", paddingBottom: "9px" }}
            >
              <div className="col-12 text-left mx-0 px-0">
                <PhoneOutlined
                  className="float-left pr-1"
                  style={{
                    fontSize: "25px",
                    color: "#08c",
                    paddingTop: "2px",
                  }}
                />{" "}
                <div className="float-left" style={{ lineHeight: "35px" }}>
                  (301) 865-9833
                </div>
              </div>
            </div>

            <Link
              to="/"
              style={{
                fontFamily: "sans-serif",
                paddingTop: "13px",
                paddingBottom: "13px",
              }}
              className="navbar-brand px-3 border-bottom m-0"
            >
              <img
                style={{ height: "50px", width: "70px" }}
                src={Logo}
                alt="logo"
              />{" "}
              <small className="font-weight-bold">The Perfect Painters</small>
            </Link>
          </div>

          <li className="nav-item active">
            <Link
              to="/"
              className="nav-link"
              style={isActive("/")}
              onMouseEnter={(i) => (i.target.style.color = "red")}
              onMouseLeave={(i) => (i.target.style.color = "black")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-link"
              style={isActive("/services")}
              onMouseEnter={(i) => (i.target.style.color = "red")}
              onMouseLeave={(i) => (i.target.style.color = "black")}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-link"
              style={isActive("/portfolio")}
              onMouseEnter={(i) => (i.target.style.color = "red")}
              onMouseLeave={(i) => (i.target.style.color = "black")}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutus"
              className="nav-link"
              style={isActive("/aboutus")}
              onMouseEnter={(i) => (i.target.style.color = "red")}
              onMouseLeave={(i) => (i.target.style.color = "black")}
            >
              About US
            </Link>
          </li>
          <li className="nav-item">
            <Link
              type="button"
              data-toggle="modal"
              data-target="#modalCenterQuiz"
              className="nav-link"
              to="/#"
              style={{ color: "black" }}
              onMouseEnter={(i) => (i.target.style.color = "red")}
              onMouseLeave={(i) => (i.target.style.color = "black")}
              // style={isActive("/contact")}
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
