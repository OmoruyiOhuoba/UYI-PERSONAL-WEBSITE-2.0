import React from "react";
import {Link} from "react-router-dom";
const Footer = () =>{
    return (
   <div className="bottom-container">
   <a href="/contact" className="btn">CONTACT ME</a>     
       <br />
      <br />
     <a class="footer-link" href="https://twitter.com/OmoruyiOhuoba">twitter</a>
     <a class="footer-link" href="https://github.com/OmoruyiOhuoba">gitHub</a>
     <a class="footer-link" href="mailto:omoruyiohuoba@yahoo.com?subject=BOOKING MESSAGE FROM YOUR UYI WEBSITE">email</a>
     <p class="last">© {new Date().getFullYear()} <span class="last-last"><a href="/#about">Omoruyi Ohuoba.</a></span> All Right Reserved.</p>
   </div>
        )
}

export default Footer;