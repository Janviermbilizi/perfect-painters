import React from "react";
import Logo from "../images/ppLogo.jpg";
import { PhoneOutlined, SendOutlined, MailOutlined } from "@ant-design/icons";
import Title from "./Title";

function AboutUs(props) {
  return (
    <>
      <Title title="About Us" />
      <div className="jumbotron jumbotron-fluid text-center py-3 m-0 bg-white">
        <div className="container-fluid">
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            data-aos-duration="4000"
          >
            <div className="col-md-6 order-md-2">
              <div id="ppimage1" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#ppimage1"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#ppimage1"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
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

              <div className="row">
                <div className="col-lg-4">
                  <p className="float-md-left">
                    <SendOutlined
                      className="pr-1"
                      style={{
                        fontSize: "25px",
                        color: "#08c",
                        paddingTop: "2px",
                      }}
                    />{" "}
                    <span style={{ lineHeight: "30px" }}>
                      Ijamsville, MD 21754
                    </span>
                  </p>
                </div>
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
            </div>
          </div>
          <hr />
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            data-aos-duration="4000"
          >
            <div className="col-md-6 mx-auto">
              <div id="ppimage2" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="py-2 m-0"
                      src={Logo}
                      style={{ height: "500px", width: "100%" }}
                      alt="owner"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#ppimage2"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#ppimage2"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
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
              <div className="row">
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
                    <span style={{ lineHeight: "30px" }}>
                      Ijamsville, MD 21754
                    </span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
