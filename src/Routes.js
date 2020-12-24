import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import aboutUsPage from "./pages/aboutUsPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/aboutus" exact component={aboutUsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
