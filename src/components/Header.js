import React from "react";
import headerImg from "../images/lta_header.png"

function Header() {
  return (
    <div className="header">        
      <img id="headerImg" src={headerImg} alt="headerImg"/>
    </div>
  );
}

export default Header;