import React from "react";
import NavBar from "./Layout/NavBar";
import WorkImg from "../assets/work.png";
import Cloud from "../assets/cloud.png";


const Work = () => {
    return (
        <div>

          <div className="work-top">
            <NavBar />

            <h1>Work</h1>

          </div>
            <hr/>
          
          <div className="work-p">
            <img className="work-img" src={WorkImg} alt="briefcase image"/>
            <h3>What I've been working on.</h3>
            <p >These are some of the projects in my portfolio that I've been working on. For a complete look at all my work, be sure to check my 
            <a className ="gitHub "href="https://github.com/OmoruyiOhuoba"> GitHub</a></p> 

          </div>


          <div>

          </div>

        </div>
    )
}

export default Work;