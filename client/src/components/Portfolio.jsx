import React from "react";
import NavBar from "./Layout/NavBar";
import TatafoImg1 from "../assets/tatafoImg-1.png";
import TatafoImg2 from "../assets/tatafoImg-2.png";
import TatafoImg3 from "../assets/tatafoImg-3.png";
import Personal1 from "../assets/personal-1.png";
import Personal2 from "../assets/personal-2.png";
import Personal3 from "../assets/personal-3.png";
import BloombankImg1 from "../assets/BloombankImg-1.png";
import BloombankImg2 from "../assets/BloombankImg-2.png";
import BloombankImg4 from "../assets/BloombankImg-4.png";
import pencilRuler from "../assets/pencil-ruler.png";
import straightTree from "../assets/straightTree.png";



const Portfolio = () => {
    return (
        <div> 

          <div className="portfolio-top">
            <NavBar />

            <h1>Portfolio</h1>
            <img className="palm-tree-1" src={straightTree} alt="Palm tree"/>
            <img className="palm-tree-2" src={straightTree} alt="Palm Tree"/>

          </div>
            <hr/>
          
          <div className="portfolio-p">
            <img className="portfolio-img" src={pencilRuler} alt="pencil and ruler "/>
            <h3>What I've been working on.</h3>
            <p >These are some of the projects in my portfolio that I've been working on. For a complete look at all my work, be sure to check my 
            <a className ="gitHub hovgit" href="https://github.com/OmoruyiOhuoba"> GitHub</a>.</p> 

          </div>

          <div className="tatafo-blog web">

            <img className="webImg tata second" src={TatafoImg2} alt="website"/>
            <img className="webImg tata firstimg" src={TatafoImg1} alt="website"/>

            <img className="webImg tata" src={TatafoImg3} alt="website"/>
            <h3 className="white">Tatafo blog</h3>  
            <h4 className="white-slim"> Web Design | Front end | Back end </h4> 
            <br/>
            <h4 className="white-slim">I designed and programmed a full-stack gossip ( "tatafo" ) news/ blog 
              website to allow users access the latest news easily and quickly.
               I utilized bright colors in the design to convey warm emotions.</h4> 
               <br/>
               <h4 className="white-slim"> <a className="white hov" href=""><u>view website</u></a> | <a className="white hov" href="https://github.com/OmoruyiOhuoba/THE-TATAFO-BLOG"><u>view code</u></a> </h4> 

          </div>
          <div className="personal-website web">
          
          <img className="webImg per second" src={Personal2} alt="website"/>
            <img className="webImg per firstimg" src={Personal1} alt="website"/>
            <img className="webImg per" src={Personal3} alt="website"/>

          <h3 className="white">Personal Website</h3>
          <h4 className="white-slim">Web Design | Front end</h4> 
            <br/>
            <h4 className="white-slim"> I focused on a simple but beautiful interface for my personal website. 
              I wanted to portray my creative mind while still staying true to my professionalism.</h4> 
            <br/>
              <h4 className="white-slim"> <a className="white hov" href="https://omoruyiohuoba.com/"><u>view website</u></a> | <a className="white hov" href="https://github.com/OmoruyiOhuoba/UYI-PERSONAL-WEBSITE-2.0"><u>view code</u></a> </h4> 



          </div>
          <div className="bloombank web">

          <img className="webImg bloom second" src={BloombankImg2} alt="website"/>
            <img className="webImg bloom firstimg" src={BloombankImg1} alt="website"/>
            <img className="webImg bloom" src={BloombankImg4} alt="website"/>
         
          <h3 className="white">Bloombank </h3>  
          <h4 className="white-slim">Web Design | Front end | Back end</h4> 
            <br/>
            <h4 className="white-slim"> I used a formal user-interface design for this fullstack web application called Bloombank which allows users bank online.</h4> 
          <br/>
              <h4 className="white-slim"> <a className="white hov" href=""><u>view website</u></a> | <a className="white hov" href="https://github.com/OmoruyiOhuoba/BLOOMBANK-BANKING-WEB-APP"><u>view code</u></a> </h4>        

          </div>

          <div className="contact-me">
       <h2>Get In Touch.</h2>
       <h3>I'm currently available for freelance work.</h3>
       <p>If you need to get any project done, I'm just a click away.</p>
       <p>Hire me today to create your personal or commercial website, mobile app or AI software.</p>
<br/>
<br/>
       <a href="/contact" className="btn contact-hover" >CONTACT ME</a>    

       <br/>  


     </div>

        </div>
    )
}

export default Portfolio;