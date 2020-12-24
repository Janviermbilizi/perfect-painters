import React from "react";
import Commercial from "../images/commercialP.png";
import Interior from "../images/interior3.jpg";
import Residential from "../images/residential.jpeg";
import Exterior from "../images/exterior2.jpg";
import { PhoneOutlined, SendOutlined, MailOutlined } from "@ant-design/icons";
import Title from "./Title";

function Services(props) {
  return (
    <>
      <Title title="Services" />
      <div className="jumbotron jumbotron-fluid text-center py-3 m-0 bg-white">
        <div className="container-fluid">
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            data-aos-duration="4000"
          >
            <div className="col-md-6 order-md-2">
              <div
                id="carouselExampleControls"
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
                  href="#carouselExampleControls"
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
                  href="#carouselExampleControls"
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
              <h2 className="mb-md-5 section-title">RESIDENTIAL PAINTING</h2>
              <p className="lead mb-5">
                Your home is a reflection of you, and as a local residential
                painting contractor, we understand the importance of your space.
                From prep to clean-up, you will know you are in good hands. As
                your house painting company, The Perfect Painters works to
                provide you with a complete and clear quote that encompasses the
                full scope of your project. We keep the job site clean and work
                efficiently. When you're looking for a house painting
                contractor, only choose the best!
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
              <div
                id="carouselExampleControls2"
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
                  href="#carouselExampleControls2"
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
                  href="#carouselExampleControls2"
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
              <h2 className="mb-md-5 section-title">COMMERCIAL PAINTING</h2>
              <p className="lead mb-5">
                When hiring a painting contractor for your commercial space, we
                acknowledge that your needs and the scope of work will vary. We
                work with your schedule to ensure there is little to no
                disruption to your business, employees, or customers. Our crew
                of commercial painting contractors work diligently and leave you
                with a professional-looking space. If you're looking for a
                painting company for a commercial project - large or small -
                give us a call!
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
          <hr />
          <div
            className="row align-items-center"
            data-aos="zoom-in-down"
            data-aos-duration="4000"
          >
            <div className="col-md-6 order-md-2">
              <div
                id="carouselExampleControls"
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
                  href="#carouselExampleControls"
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
                  href="#carouselExampleControls"
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
              <h2 className="mb-md-5 section-title">INTERIOR PAINTING</h2>
              <p className="lead mb-5">
                We offer top-notch interior painting services. Every member of
                our crew has years of experience that they use to ensure your
                space looks great. From start to finish, you need an interior
                painting company that you can trust. We pay attention to every
                detail, to ensure smooth coverage and clean lines. Our highly
                skilled team respects your home and will leave the site
                spotless. As your premier interior house painter, we strive to
                exceed expectations in every step of the project.
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
              <div
                id="carouselExampleControls2"
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
                  href="#carouselExampleControls2"
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
                  href="#carouselExampleControls2"
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
              <h2 className="mb-md-5 section-title">EXTERIOR PAINTING</h2>
              <p className="lead mb-5">
                If you are searching for an exterior house painter, you need to
                find a team that can take care of every step of the process. We
                are sure to adequately prep every surface to ensure great
                durability. As your reliable exterior painting contractor, we
                are here to help. Whether your home could use some TLC or you
                want to update your home's curb appeal, we are happy to serve
                you.
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
export default Services;
