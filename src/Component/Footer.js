import React from "react";
import "./Footer.css";
import {
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  TwitterIcon,
} from "react-share";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <p>Copyright © 2020 Saj All Rights Reserved.</p>
        </div>
        <div className="footer__bottom_right">
          <FacebookShareButton url="https://facebook.com" className="icon">
            <FacebookIcon size={26} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url="https://facebook.com" className="icon">
            <LinkedinIcon size={26} round={true} />
          </LinkedinShareButton>
          <PinterestShareButton url="https://facebook.com" className="icon">
            <PinterestIcon size={26} round={true} />
          </PinterestShareButton>
          <TwitterShareButton
            className="icon"
            url="https://twitter.com/tatacapital?s=20"
          >
            <TwitterIcon size={26} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton className="icon" url="https://twitter.com/">
            <WhatsappIcon size={26} round={true} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
