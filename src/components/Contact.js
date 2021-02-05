import React, { useState } from "react";
import Title from "./Title";
import { PhoneOutlined, SendOutlined, MailOutlined } from "@ant-design/icons";
import { create } from "./apiCalls";
//import axios from "axios";

const Contact = (props) => {
  const [values, setValues] = useState({
    username: "",
    phone: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    buttonText: "Send Message",
    error: "",
    success: "",
  });

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({
      ...values,
      error: "",
      success: "",
      [name]: value,
    });
  };
  const {
    username,
    phone,
    email,
    address,
    address2,
    city,
    state,
    zip,
    message,
    buttonText,
    error,
    success,
  } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting..." });
    const customer = {
      username,
      phone,
      email,
      address,
      address2,
      city,
      state,
      zip,
      message,
    };
    //console.log(formToSubmit);

    create(`http://localhost:3000/api/paintingrequest`, customer).then(
      (data) => {
        if (data.error) {
          setValues({
            ...values,
            buttonText: "Send Message",
            error: data.error,
          });
        } else {
          setValues({
            ...values,
            username: "",
            phone: "",
            email: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            message: "",
            buttonText: "Submitted",
            success: data.message,
          });
        }
      }
    );
  };

  return (
    <>
      <Title title="Contact" />
      <div className="jumbotron jumbotron-fluid text-center bg-white">
        <div className="container space2">
          <div
            className="row"
            //data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-md-4">
              <p className="float-md-left">
                <SendOutlined
                  className="pr-1"
                  style={{
                    fontSize: "25px",
                    color: "#08c",
                    paddingTop: "2px",
                  }}
                />{" "}
                <span style={{ lineHeight: "30px" }}>Ijamsville, MD 21754</span>
              </p>
            </div>
            <div className="col-md-4">
              <p className="float-md-center">
                <PhoneOutlined
                  className="pr-1"
                  style={{
                    fontSize: "25px",
                    color: "#08c",
                    paddingTop: "2px",
                  }}
                />{" "}
                <span style={{ lineHeight: "35px" }}>(301) 865-9833</span>
              </p>
            </div>
            <div className="col-md-4">
              <p className="float-md-right">
                <MailOutlined
                  className="pr-1"
                  style={{
                    fontSize: "25px",
                    color: "#08c",
                    paddingTop: "2px",
                  }}
                />{" "}
                <span className="px-1" style={{ lineHeight: "30px" }}>
                  jformeller57@yahoo.com
                </span>
              </p>
            </div>
          </div>

          {error.length != 0 ? (
            <div className="row text-danger">
              <div className="col-12">
                <h1>{error}</h1>
              </div>
            </div>
          ) : null}
          {success.length != 0 ? (
            <div className="row text-success">
              <div className="col-12">
                <h3>{success}</h3>
              </div>
            </div>
          ) : null}

          <div
            className="row mt-4"
            //data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-12 order-2">
              <form method="post">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name/Company</label>
                    <input
                      type="text"
                      onChange={handleChange("username")}
                      value={username}
                      id="name"
                      className="form-control "
                    ></input>
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      onChange={handleChange("phone")}
                      value={phone}
                      id="phone"
                      className="form-control "
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      onChange={handleChange("email")}
                      value={email}
                      id="email"
                      className="form-control "
                    ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input
                      type="text"
                      onChange={handleChange("address")}
                      value={address}
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    ></input>
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input
                      type="text"
                      onChange={handleChange("address2")}
                      value={address2}
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      onChange={handleChange("city")}
                      value={city}
                      className="form-control"
                      id="inputCity"
                    ></input>
                  </div>
                  <div className="col-md-4 form-group">
                    <label htmlFor="inputState">State</label>
                    <select
                      id="inputState"
                      onChange={handleChange("state")}
                      value={state}
                      className="form-control"
                    >
                      <option defaultValue>Choose...</option>
                      <option>D.C.</option>
                      <option>Maryland</option>
                      <option>Virginia</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-2 form-group">
                    <label htmlFor="inputZip">Zip</label>
                    <input
                      type="text"
                      onChange={handleChange("zip")}
                      value={zip}
                      className="form-control"
                      id="inputZip"
                    ></input>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Description / Message</label>
                    <textarea
                      onChange={handleChange("message")}
                      value={message}
                      id="message"
                      className="form-control "
                      cols="30"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 form-group">
                    <button
                      onClick={handleSubmit}
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      {buttonText}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
