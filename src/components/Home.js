import React from "react";
import { Link } from 'react-router-dom';
import homeImg from "../images/lta_homepage_design.png"
import ig from "../images/Lauren Tyson Artist Instagram.png"

function Home() {

  return (
    <div className="home">
      <img id="homeImg" src={homeImg} alt="homeImg"/>
      <div className="homeText">
        <p>Welcome! Use the navigation at the top to check out my work.</p>
        <p>To contact me for orders, commissions, or anything else, please email 👉 laurentysonartist@gmail.com</p>
        <p>Follow me on Instagram 👇 🥳 </p><Link to="https://www.instagram.com/lauren_tyson_artist/" target="_blank" rel="noreferrer"><img id="ig" src={ig} alt="ig"></img></Link>
      </div>
    </div>
  );
}

export default Home;
