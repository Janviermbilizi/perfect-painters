import React from "react";
import AboutUs from "../components/aboutUs";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Layout from "../components/Layout";

function ServicesPage() {
  return (
    <Layout>
      <Services />
      <Contact />
      <AboutUs />
    </Layout>
  );
}

export default ServicesPage;
