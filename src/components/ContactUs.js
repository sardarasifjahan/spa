import React from "react";
import "./ContactUs.css";
import Iframe from "react-iframe";
function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact">
      <h1>Get in touch</h1>
      <h4>
        Find out how Equinox's Drones can solve problems specific to your
        Sector? Let's talk
      </h4>
      <div className="contact__divider">
        <div className="contact__left">
          <h1>We Are Here</h1>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14663.636460654707!2d69.70486355!3d23.2463941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1607258111458!5m2!1sen!2sin"
            width="600"
            height="300"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></Iframe>
        </div>
        <div className="contact__right">
          <h1>Contact Us</h1>
          <div className="contact__form">
            <form>
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Mobile" className="input" />
              <input type="text" placeholder="Email" className="input" />
              <textarea placeholder="Message" className="input" />
              <button onSubmit={handleSubmit} className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
