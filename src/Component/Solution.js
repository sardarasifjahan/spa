import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Solution() {
  return (
    <div className="solution">
      <div className="solution_center">
        <h1>Here r's the solution for your enquiry</h1>
      </div>
      <div className="sol_box">
        <Link to="/security">
          <h2>Security & Surveillance</h2>
        </Link>
        <p>
          Surveillance is the close observation of a person, group of people,
          behaviours, activities, infrastructure, building etc for the purpose
          of managing, influencing, directing, or protecting.
          <ul className="sol_ul">
            <li className="sol_li">
              <h4>Event Surveillance</h4>
              <p>
                Securing events often involves a small task force trying to
                cover a large area and a lot of people.
              </p>
            </li>
            <li className="sol_li">
              <h4>Intruder Response</h4>
              <p>
                Equipped with thermal imaging, drones are able to not only spot
                intruders but track them until they can be apprehended.
              </p>
            </li>
            <li className="sol_li">
              <h4>Drone use deters intruders</h4>
              <p>
                Just as having alarms or cameras can make your event less of a
                target, security equipped with drones is more of a deterrent for
                troublemakers.
              </p>
            </li>
          </ul>
        </p>
      </div>
      <div className="sol_box">
        <Link to="/survey">
          <h2>Surveying and Mapping</h2>
        </Link>
        <p>
          Surveying with a drone offers enormous potential to GIS professionals.
          With a drone, it is possible to carry out topographic surveys of the
          same quality as the highly accurate measurements collected by
          traditional methods, but in a fraction of the time. This substantially
          reduces the cost of a site survey and the workload of specialists in
          the field.
          <ul>
            <li>
              <h4>Land surveying / cartography</h4>
              <p>
                Survey drones generate high-resolution orthomosaics and detailed
                3D models of areas where low-quality, outdated or even no data,
                are available.Surveyors can also extract features from the
                images, such as signs, curbs, road markers, fire hydrants and
                drains.
              </p>
            </li>
            <li>
              <h4>Land management and development</h4>
              <p>
                Aerial images taken by drones greatly accelerate and simplify
                topographic surveys for land management and planning. This holds
                true for site scouting, allotment planning and design, as well
                as final construction of roads, buildings and utilities.
              </p>
            </li>
          </ul>
        </p>
      </div>
      <div className="sol_box">
        <Link to="/inspection">
          <h2>Inspection</h2>
        </Link>
        <p>
          Drone inspections and surveys of difficult-to-access structures and
          pipelines deliver a more efficient, cost-effective and safer
          inspection process that can help mitigate risk, while you keep
          operations running as usual
          <ul>
            <li>
              <h4>Confined Space Tank Inspections</h4>
              <p>
                Accessing and inspecting the confined spaces in the oil and gas
                industry, construction sites and other facilities can be
                challenging. You no longer have to send personnel into unsafe
                areas or dangerous confined spaces.
              </p>
            </li>
            <li>
              <h4>Thermal Imaging</h4>
              <p>
                Thermal imaging to detect leaks, faulty structures and energy
                loss in the fraction of the time it would take to manually
                inspect a property. Using drone thermal imaging can detect an
                area that may be prone to malfunction in the future.
              </p>
            </li>
          </ul>
        </p>
      </div>
      <div className="sol_box">
        <Link to="/delivery">
          <h2>Drone Delivery</h2>
        </Link>
        <p>
          A delivery drone is an autonomous unmanned aerial vehicle (UAV) used
          to transport packages, medical supplies, food, or other goods.
          <ul>
            <li>
              <h4>Healthcare delivery</h4>
              <p>
                Drones can be used to transport medicinal products such as blood
                products, vaccines, and other supplies such as pharmaceuticals
                and medical samples.
              </p>
            </li>
            <li>
              <h4>Food delivery</h4>
              <p>
                Drones have been proposed as a solution for rapidly delivering
                prepared foods, such as pizzas, tacos, and frozen beverages.
              </p>
            </li>
            <li>
              <h4>Postal delivery</h4>
              <p>Drone can be used to transport for the postal service.</p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Solution;
