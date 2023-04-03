import React from "react";
import { NavLink } from "react-router-dom"

let activeStyle = {  
  color:"#116600",
  borderBottom: "2px solid #116600",
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
            Hats
          </NavLink>       
        <NavLink
            to="paintings"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            Paintings
          </NavLink>
        <NavLink
            to="commission"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            Commission Me
          </NavLink>
        <NavLink
            to="bio"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            Artist Bio
          </NavLink>
        <NavLink
            to="faqs"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            FAQs
          </NavLink>
        </nav>
    </div>
    
  );
}

export default Nav;