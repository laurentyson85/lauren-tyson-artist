import React from "react";
import headshot from "../images/headshot.jpeg"


function Bio() {

  return (
    <div>
      <div className="headshot">
        <img class="headshot" src={headshot} alt="Lauren Headshot"/>
      </div>
      <div className="bioTextFirstBlock">
        bio
      </div>
      <div className="bioTextSecondBlock">
        bio text 2
      </div>
    </div>
  );
}

export default Bio;
