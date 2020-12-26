import React from "react";
import AboutUs from "../components/aboutUs";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Layout from "../components/Layout";

function ServicesPage() {
  return (
    <Layout>
      <Portfolio />
      <Contact />
      <Services />
      <AboutUs />
    </Layout>
  );
}

export default ServicesPage;
