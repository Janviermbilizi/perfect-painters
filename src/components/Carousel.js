import React from "react";
import Commercial from "../images/commercialP.png";
import Interior from "../images/interior3.jpg";
import Residential from "../images/residential.jpeg";
import Exterior2 from "../images/exterior2.jpg";

function Carousel(props) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mb-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={Residential}
            style={{
              height: "500px",
              width: "100%",
              fontFamily: "object-fit: cover",
              //filter: "grayscale(100%)",
              //webkitFilter: "grayscale(100%)",
            }}
            alt="First slide"
          />
          <div
            className="carousel-caption"
            style={{
              color: "white",
              backgroundColor: "black",
              marginX: "5%",
              opacity: "0.7",
            }}
          >
            <h2 className="">RESIDENTIAL PAINTING</h2>
            <p className="lead">
              Your home is a reflection of you, and as a local residential
              painting contractor, we understand the importance of your space.
              From prep to clean-up, you will know you are in good hands. As
              your house painting company, The Perfect Painters works to provide
              you with a complete and clear quote that encompasses the full
              scope of your project. We keep the job site clean and work
              efficiently. When you're looking for a house painting contractor,
              only choose the best!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={Commercial}
            style={{
              height: "500px",
              width: "100%",
              fontFamily: "object-fit: cover",
              //filter: "grayscale(100%)",
              //webkitFilter: "grayscale(100%)",
            }}
            alt="Second slide"
          />
          <div
            className="carousel-caption"
            style={{
              color: "white",
              backgroundColor: "black",
              marginX: "5%",
              opacity: "0.7",
            }}
          >
            <h2 className="text-white">COMMERCIAL PAINTING</h2>
            <p className="lead">
              When hiring a painting contractor for your commercial space, we
              acknowledge that your needs and the scope of work will vary. We
              work with your schedule to ensure there is little to no disruption
              to your business, employees, or customers. Our crew of commercial
              painting contractors work diligently and leave you with a
              professional-looking space. If you're looking for a painting
              company for a commercial project - large or small - give us a
              call!
            </p>
          </div>
        </div>
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src={Exterior2}
            style={{
              height: "500px",
              width: "100%",
              fontFamily: "object-fit: cover",
              //filter: "grayscale(100%)",
              //webkitFilter: "grayscale(100%)",
            }}
            alt="Third slide"
          />
          <div
            className="carousel-caption"
            style={{
              color: "white",
              backgroundColor: "black",
              marginX: "5%",
              opacity: "0.7",
            }}
          >
            <h2 className="">EXTERIOR PAINTING</h2>
            <p className="lead">
              If you are searching for an exterior house painter, you need to
              find a team that can take care of every step of the process. We
              are sure to adequately prep every surface to ensure great
              durability. As your reliable exterior painting contractor, we are
              here to help. Whether your home could use some TLC or you want to
              update your home's curb appeal, we are happy to serve you.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={Interior}
            style={{
              height: "500px",
              width: "100%",
              fontFamily: "object-fit: cover",
              //filter: "grayscale(100%)",
              //webkitFilter: "grayscale(100%)",
            }}
            alt="Forth slide"
          />
          <div
            className="carousel-caption"
            style={{
              color: "white",
              backgroundColor: "black",
              marginX: "5%",
              opacity: "0.7",
            }}
          >
            <h2 className="">INTERIOR PAINTING</h2>
            <p className="lead">
              We offer top-notch interior painting services. Every member of our
              crew has years of experience that they use to ensure your space
              looks great. From start to finish, you need an interior painting
              company that you can trust. We pay attention to every detail, to
              ensure smooth coverage and clean lines. Our highly skilled team
              respects your home and will leave the site spotless. As your
              premier interior house painter, we strive to exceed expectations
              in every step of the project.
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
