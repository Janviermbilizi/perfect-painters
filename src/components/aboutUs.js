import React from "react";
import Logo from "../images/ppLogo.jpg";
import Title from "./Title";
import PhoneAndEmailRow from "./PhoneAndEmailRow";

function AboutUs(props) {
  return (
    <>
      <Title title="About Us" />
      <div className="jumbotron jumbotron-fluid text-center py-3 m-0 bg-white">
        <div className="container-fluid">
          <div
            className="row align-items-center"
            //data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-md-6 order-md-2">
              <div
                id="ppimage1"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#ppimage1"
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
                  href="#ppimage1"
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
              <h2 className="mb-md-5 section-title">The Perfect Painters</h2>
              <p className="lead mb-5">
                The perfect painters was founded by John Formeller in 1990.
                Since then, the company has been painting homes, buisnesses, and
                even local museums in the DMV Metro Area. The company offers
                fair prices to ensure everyone has the opportunity to make their
                place a dream place. The Perfect Painters has gained trust and
                love from the community.
              </p>
              <PhoneAndEmailRow />
            </div>
          </div>
          <hr />
          <div
            className="row align-items-center"
            //data-aos="zoom-in-down"
            //data-aos-duration="4000"
          >
            <div className="col-md-6 mx-auto">
              <div
                id="ppimage2"
                className="carousel slide"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#ppimage2"
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
                  href="#ppimage2"
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
              <h2 className="mb-md-5 section-title">John Formeller</h2>
              <p className="lead mb-5">
                John has been painting for over thirty years. He is an expert in
                his feild, painting homes, buisnesses, and even local museums.
                He is passionate about making houses feel and look like dream
                home. He is a trusted professional, adored by his community. If
                you are seeking to liven up your space and your day, John
                Formeller is your guy. John is a husband and father of one
                lovely and beautiful daughter.
              </p>
              <PhoneAndEmailRow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
