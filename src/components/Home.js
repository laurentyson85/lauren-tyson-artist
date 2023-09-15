import React from "react";
import homeImg from "../images/lta_homepage_design.png"

function Home() {

  return (
    <div className="home">
      <div className="homeText">
        <p>Welcome! Use the navigation at the top to check out my work.</p>
        <p>To contact me for orders, commissions, or anything else, please email 👉 laurentysonartist@gmail.com</p>
        <br></br>
        <img id="homeImg" src={homeImg} alt="homeImg"/>
      </div>
    </div>
  );
}

export default Home;
