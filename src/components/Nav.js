import React from "react";
import { NavLink } from "react-router-dom"

let activeStyle = {
  color:"white",
  borderBottom: "2px solid white",
}


function Nav() {
  return (
    <div className="navBar">
        <nav>
        <NavLink
            to="/"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>        
        <NavLink
            to="hats"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All Jobs
          </NavLink>       
        <NavLink
            to="paintings"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Hipster View
          </NavLink>
        </nav>
    </div>
    
  );
}

export default Nav;