import React from "react";
import Carousel from "../components/Carousel";
import AboutUs from "../components/aboutUs";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <Carousel />
      <AboutUs />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
}

export default HomePage;
