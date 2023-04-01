import React from "react";
import { Link } from "react-router-dom"


function Nav() {
  return (
    <div className="navBar">
        <nav>
        <Link to="/">Home</Link>
        <Link to="/hats">Hats</Link>
        <Link to="/paintings">Paintings</Link>
        </nav>
    </div>
    
  );
}

export default Nav;