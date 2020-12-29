import React from "react";
import Support from "../svg/supportive.svg";
import proven from "../svg/proven.svg";
import focused from "../svg/customer-focused_1.svg";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <h4>
        Our proven drone solutions simplify the collection and analysis of
        geospatial data, allowing professionals in surveying, agriculture,
        engineering and humanitarian aid to make better decisions, faster. Our
        drones are designed to suit a variety of applications including Land
        surveying, pipeline monitoring, precision agriculture, Emergency
        Delivery to remote locations, conducting Search & Rescue operations and
        to carry out Intelligence, Surveillance & Reconnaissance (ISR) missions
        faster and thus reducing critical delivery times saving time, money and
        lives.
      </h4>
      <div className="about_main">
        <h3>Our Company</h3>
        <div className="about_company">
          <div className="col-3">
            <img src={Support} className="about_image" />
            <h2>Supportive</h2>
            <p>
              Through our expert distribution partners and in-house customer
              service and satisfaction teams, we provide the professional-grade
              support our customers demand.
            </p>
          </div>
          <div className="col-3">
            <img src={proven} className="about_image" />
            <h2>Proven</h2>
            <p>
              we have been producing industry-proven drones since 2021. We
              continue to fine-tune our offer by offering solutions that are
              ever more efficient, safe and easy to use.
            </p>
          </div>
          <div className="col-3">
            <img src={focused} className="about_image" />
            <h2>Customer focused</h2>
            <p>
              We are passionately committed to fully understand our customers’
              needs and developing easy-to-use, end-to-end solutions that meet
              their exacting requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
