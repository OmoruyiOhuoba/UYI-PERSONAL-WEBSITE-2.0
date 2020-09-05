import React from "react";
import {Link} from "react-router-dom";
import MyAvatar from "../../assets/myAvatar.png";


const NavBar = () => {

    return (
    <div >
              <ul>
                  <li><a href="/" className="navnav">About</a></li>
                  <li><Link to="/portfolio" className="navnav">Portfolio</Link></li>
                  <li><Link to="/contact" className="navnav">Contact</Link></li>
                 
             </ul>
             <a href="/" ><img src={MyAvatar} className="top-face" alt="top-face" /></a>

    </div>
       
    )
}

export default NavBar;