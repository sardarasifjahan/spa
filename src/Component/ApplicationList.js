import React from "react";

function ApplicationList({ src, htext, ptext }) {
  return (
    <div className="applicationlist">
      <div className="app_left">
        <img className="img" src={src} />
      </div>
      <div className="app_right">
        <h2>{htext}</h2>
        <p>{ptext}</p>
      </div>
    </div>
  );
}

export default ApplicationList;
