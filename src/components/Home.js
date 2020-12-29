import React from "react";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <ContactUs />
      <Footer />
    </div>
  );
}
export default Home;
