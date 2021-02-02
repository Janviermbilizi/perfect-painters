import React from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
//import Carousel from "./components/Carousel";
// import { Message } from "@primer/octicons-react";

const Layout = ({ children, match }) => {
  const head = () => (
    <Helmet>
      <meta charSet="utf-8" />
      <title>The Perfect Painters</title>
      <link rel="canonical" href="https://mern-stack.com" />
    </Helmet>
  );
  return (
    <>
      {head()}
      <div className="sticky-top">
        <Header />
        <Navbar match={match} />
      </div>
      <div className="container-fluid p-0 m-0">{children}</div>
      <Footer />
    </>
  );
};

export default withRouter(Layout);
