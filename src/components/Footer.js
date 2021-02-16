import React from "react";
import { FacebookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="jumbotron jumbotron-fluid py-3 m-0 ">
      <div className="container-fuid px-md-5">
        <div className="row m-0">
          <div className="col-md-4 col-sm-12">
            <h4>Navigation</h4>
            <hr />
            <ul className="list-unstyled">
              <li>
                <Link className="text-dark" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-dark"
                  type="button"
                  data-toggle="modal"
                  data-target="#modalCenterQuiz"
                  to="/"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/">
                  Community
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h4>Contact Info</h4>
            <hr />
            <ul className="list-unstyled">
              <li>The Perfect Painters</li>
              <li>2751 Loch Haven Dr | Ijamsville, Maryland</li>
              <li>301-865-9833 | theperfectpaintersmd@gmail.com</li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h4>Our Philosophy</h4>
            <hr />
            <p>
              We are committed to professionalism, integrity, and sustainability
              in the painting industry. Living up to this commitment means that
              we follow through on our promises and treat every customer like
              they are our only customer, minimize waste where possible, and
              contribute to our community through volunteer projects and
              donations.
            </p>
          </div>
        </div>
        <hr />
        <div className="row m-0">
          <div className="col-9 float-left">
            <small>
              © {new Date().getFullYear()} The Perfect Painters - All Rights
              Reserved{" "}
            </small>
          </div>
          <div className="col-3">
            <FacebookOutlined
              className="float-right text-primary"
              style={{
                fontSize: "25px",
                paddingTop: "2px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
