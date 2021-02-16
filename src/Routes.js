import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
//import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutUsPage from "./pages/aboutUsPage";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/contact" exact component={ContactPage} /> */}
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/aboutus" exact component={AboutUsPage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
