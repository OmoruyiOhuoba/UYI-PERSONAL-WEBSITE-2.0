import React from "react";

const Footer = () =>{
    return (
   <div className="bottom-container">
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