import React from "react";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Product from "./components/Product";
import Application from "./components/Application";
import Service from "./components/Service";
import "./App.css";
import "./components/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="nav">
        <div className="logo">
          <h3>LOGO</h3>
        </div>

        <div className="nav__header">
          <Link to="/" className="link">
            <h3>Home</h3>
          </Link>
          <Link to="/about" className="link">
            <h3> About</h3>
          </Link>
          <Link to="/product" className="link">
            <h3> Product</h3>
          </Link>
          <Link to="/service" className="link">
            <div className="dropDown">
              <h3> Solution</h3>
              <div className="drop">
                <Link to="/">
                  <h4>Security & Surveillance</h4>
                </Link>
                <Link to="/about">
                  <h4> Surveying and Mapping</h4>
                </Link>
                <Link to="/contactus">
                  <h4>Inspection</h4>
                </Link>
                <Link to="/contactus">
                  <h4>Construction Progress Monitoring</h4>
                </Link>
                <Link to="/contactus">
                  <h4>Drone Delivery</h4>
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/application" className="link">
            <div className="dropDown">
              <h3> Application</h3>
              <div className="drop">
                <Link to="/">
                  <h4>Border Security</h4>
                </Link>
                <Link to="/about">
                  <h4> Railways</h4>
                </Link>
                <Link to="/contactus">
                  <h4> Agriculture</h4>
                </Link>
                <Link to="/contactus">
                  <h4>Solar Energy</h4>
                </Link>
                <Link to="/contactus">
                  <h4>Wind Energy</h4>
                </Link>
                <Link to="/contactus">
                  <h4> Mining</h4>
                </Link>
                <Link to="/contactus">
                  <h4> Construction & Real State</h4>
                </Link>
                <Link to="/contactus">
                  <h4>Disaster Management</h4>
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/contactus" className="link">
            <h3>ContactUs</h3>
          </Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/application">
          <Application />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
