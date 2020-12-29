import React from "react";
import "./ApplicationRight.css";

function ApplicationRight({ texth, textp }) {
  return (
    <div className="application__right">
      <h2>{texth}</h2>
      <p>{textp}</p>
    </div>
  );
}

export default ApplicationRight;
