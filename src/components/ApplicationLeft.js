import React from "react";
import Iframe from "react-iframe";
import "./ApplicationLeft.css";
function ApplicationLeft({ src }) {
  return (
    <div className="application__left">
      <Iframe
        src={src}
        width="600"
        height="300"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></Iframe>
    </div>
  );
}

export default ApplicationLeft;
