import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Component/About";
import Application from "./Component/Application";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Solution from "./Component/Solution";
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <section>
          <section>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/application" component={Application} />
            <Route path="/solution" component={Solution} />
          </section>
        </section>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
