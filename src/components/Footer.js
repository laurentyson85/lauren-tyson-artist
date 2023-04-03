import React from "react";
import footerImg from "../images/Made_in_MT_Color_JPG_transparent.png"

function Footer() {
  return (
    <div className="footer">
      <p>Lauren Tyson, Artist <img id="footerImg" src={footerImg} alt="footerImg"/></p> 
      <p>©2023 by Lauren Tyson. A registered Made in Montana business.</p>
      <p>Get in touch: laurentysonartist@gmail.com</p>
    </div>
  );
}

export default Footer;