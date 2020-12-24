import React from "react";
import Carousel from "../components/Carousel";
import AboutUs from "../components/aboutUs";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <Carousel />
      <Services />
      <AboutUs />
      <Contact />
    </Layout>
  );
}

export default HomePage;
