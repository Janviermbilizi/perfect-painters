import React, { useState } from "react";
import { create } from "./apiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const { REACT_APP_PERFECT_PAINTERS_API_URL } = process.env;

const Contact = (props) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    servicecategory: "",
    servicearea: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    buttonText: "Submit Request",
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
    firstname,
    lastname,
    phone,
    email,
    servicecategory,
    servicearea,
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
      firstname,
      lastname,
      phone,
      email,
      servicecategory,
      servicearea,
      address,
      address2,
      city,
      state,
      zip,
      message,
    };
    //console.log(formToSubmit);

    create(
      `${REACT_APP_PERFECT_PAINTERS_API_URL}/paintingrequest`,
      customer
    ).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          buttonText: "Send Message",
          error: data.error,
        });
        toast.error(data.error);
      } else {
        setValues({
          ...values,
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          servicecategory: "",
          servicearea: "",
          address: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
          message: "",
          buttonText: "Request Submitted",
          success: data.message,
        });
        toast.success(data.message);
      }
    });
  };

  return (
    <>
      {/* <Title title="Get An Estimate!" /> */}
      <div
        className="modal fade"
        id="modalCenterQuiz"
        tabIndex="-1"
        role="dialog"
        data-keyboard="false"
        data-backdrop="static"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Get An Estimate!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body m-0 p-0">
              <div className="jumbotron jumbotron-fluid text-center bg-white py-2">
                <div className="container space2">
                  <ToastContainer />
                  <div
                    className="alert alert-danger text-center"
                    style={{ display: error ? "" : "none" }}
                  >
                    {error}
                  </div>
                  <div
                    className="alert alert-success text-center"
                    style={{ display: success ? "" : "none" }}
                  >
                    {success}
                  </div>

                  <div
                    className="row mt-4"
                    //data-aos="zoom-in-down"
                    //data-aos-duration="4000"
                  >
                    <div className="col-12 order-2">
                      <form method="post">
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <label htmlFor="name">First Name</label>
                            <input
                              type="text"
                              onChange={handleChange("firstname")}
                              value={firstname}
                              id="firstname"
                              className="form-control "
                            ></input>
                          </div>
                          <div className="col-md-6 form-group">
                            <label htmlFor="phone">Last Name</label>
                            <input
                              type="text"
                              onChange={handleChange("lastname")}
                              value={lastname}
                              id="lastname"
                              className="form-control "
                            ></input>
                          </div>
                        </div>
                        <div className="row">
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
                          <div className="col-md-6 form-group">
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
                            <label htmlFor="servicecategory">
                              Service Category
                            </label>
                            <select
                              id="inputServicecategory"
                              onChange={handleChange("servicecategory")}
                              value={servicecategory}
                              className="form-control"
                            >
                              <option defaultValue>Choose...</option>
                              <option>Commercial painting</option>
                              <option>Residential painting</option>
                            </select>
                          </div>
                          <div className="col-md-6 form-group">
                            <label htmlFor="servicearea">Service Area</label>
                            <select
                              id="inputServicearea"
                              onChange={handleChange("servicearea")}
                              value={servicearea}
                              className="form-control"
                            >
                              <option defaultValue>Choose...</option>
                              <option>Exterior painting</option>
                              <option>Interior painting</option>
                              <option>Interior & Exterior painting</option>
                              <option>Paint cabinets</option>
                              <option>Paint doors</option>
                              <option>Repair drywall</option>
                              <option>Repair water damage</option>
                              <option>Staining</option>
                            </select>
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
                            <label htmlFor="message">
                              Description / Message
                            </label>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
