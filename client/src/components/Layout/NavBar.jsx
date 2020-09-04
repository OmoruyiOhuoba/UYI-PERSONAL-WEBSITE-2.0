import React from "react";
import {Link} from "react-router-dom";


const NavBar = () => {

    return (
    <div >
              <ul>
                  <li><a href="/" className="navnav">About</a></li>
                  <li><Link to="/work" className="navnav">Work</Link></li>
                  <li><Link to="/contact" className="navnav">Contact</Link></li>
                 
             </ul>
    </div>
       
    )
}

export default NavBar;