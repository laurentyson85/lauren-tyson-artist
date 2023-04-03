import React from "react";
import { NavLink } from "react-router-dom"

let activeStyle = {
  color:"white",
  borderBottom: "2px solid white",
}


function Nav() {
  return (
    <div className="topnav">
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
            Hats
          </NavLink>       
        <NavLink
            to="paintings"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Paintings
          </NavLink>
        </nav>
    </div>
    
  );
}

export default Nav;