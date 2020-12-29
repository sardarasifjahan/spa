import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__support">
          <h2>Support</h2>
          <h4>Help</h4>
          <h4>Community</h4>
          <h4>Advisor</h4>
        </div>
        <div className="footer__company">
          <h2>Company</h2>
          <h4>About</h4>
          <h4>Blog</h4>
          <h4>Press</h4>
        </div>
        <div className="footer__tp">
          <h2>Terms & Policies</h2>
          <h4>Policie</h4>
          <h4>Terms of Use</h4>
          <h4>Privacy</h4>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <p>Copyright © 2020 Saj All Rights Reserved.</p>
        </div>
        <div className="footer__bottom_right">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <YouTubeIcon className="icon" />
          <WhatsAppIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
