import React from "react";
import Commercial from "../images/commercialP.png";
import Interior from "../images/interior3.jpg";
import Residential from "../images/residential.jpeg";
import Exterior from "../images/exterior2.jpg";

import Title from "./Title";

function Portfolio(props) {
  return (
    <>
      <Title title="Portfolio" />
      <div className="jumbotron jumbotron-fluid text-center py-3 m-0 bg-white">
        <div className="container-fluid">
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-md-6">
              <h3 className="section-title text-muted">Before</h3>
              <div
                id="residential"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Residential}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Residential}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Residential}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#residential"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#residential"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="section-title text-muted">After</h3>
              <div
                id="residential"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Residential}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Residential}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Residential}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#residential"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#residential"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-md-6">
              <h3 className="section-title text-muted">Before</h3>
              <div
                id="commercial"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Commercial}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Commercial}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Commercial}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#commercial"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#commercial"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 mr-auto">
              <h3 className="section-title text-muted">After</h3>
              <div
                id="commercial"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Commercial}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Commercial}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Commercial}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#commercial"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#commercial"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-md-6">
              <h3 className="section-title text-muted">Before</h3>
              <div
                id="interior"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Interior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Interior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Interior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#interior"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#interior"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 mr-auto">
              <h3 className="section-title text-muted">Before</h3>
              <div
                id="interior"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Interior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Interior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Interior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#interior"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#interior"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-md-6">
              <h3 className="section-title text-muted">Before</h3>
              <div
                id="exterior"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Exterior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Exterior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Exterior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#exterior"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#exterior"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-md-6 mr-auto">
              <h3 className="section-title text-muted">After</h3>
              <div
                id="exterior"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Exterior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Exterior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Exterior}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#exterior"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#exterior"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Portfolio;
