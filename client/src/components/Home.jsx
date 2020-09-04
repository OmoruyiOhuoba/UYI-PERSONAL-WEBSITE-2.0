import React from "react";
import Cloud from "../assets/cloud.png";
import JsImage from "../assets/javascript.png";
import Mountain from "../assets/mountain.png";
import MyAvatar from "../assets/myAvatar.png";
import Python from "../assets/python.jpeg";
import Swift from "../assets/swift.jpeg";
import UyiFace from "../assets/uyi-face.JPG";
import NavBar from "./Layout/NavBar";

const Home = () => {
    return (
        <div>
    <div className="top-part" id="uyi">
    <NavBar />
    <img alt="cloud" className="cloud-1" src={Cloud} />
    <a href="/#about" ><img src={MyAvatar} className="top-face" alt="top-face" /></a>
      <h1> I'm Uyi.</h1>
    <p className="first">a <span className="pro">pro</span>grammer</p>
    <img alt="cloud-2" className="cloud-2" src={Cloud} />
    <img alt="mountain" className="mountain" src={Mountain} />
   </div>


   <div className="middle-container">
     <div className="profile" id = "about" >
       <img className="uyi" src={UyiFace} alt="uyi" />
       <h2>Hi.</h2>
       <p className="hello">I'm a fullstack javaScript developer with interests in mobile and Artifical Intelligence development. I have a passion for programming and love to create for web and mobile devices.</p>
     </div>
    <br />
     <hr />
     <div className="skills">
       <h2>My Skills.</h2>
       <div className="skill-row">
         <img className="js" src={JsImage} alt="javascript" />
         <h3>Javascript</h3>
         <p>I live the best of both worlds by developing beautiful front-end web apps and also implementing the sustainablebackend logic for the application's server and database</p>
       </div>
       <div className="skill-row">
         <img className="python" src={Python} alt="python" />
         <h3>Python</h3>
         <p>I love creating algorithms and programmes for Artificial Intelligence software</p>
       </div>
       <div className="skill-row">
         <img className="swift" src={Swift} alt="javascript" />
         <h3>Swift</h3>
         <p>I programme mobile applications ranging from augmented reality applications to 2D games and commercial apps for iOS devices</p>
       </div>
     </div>
     <br />
     <hr />
     <div className="contact-me">
       <h2>Get In Touch.</h2>
       <h3>I'm currently available for freelance work.</h3>
       <p>If you need to get any project done, I'm just a click away.</p>

       <br />

       <h1 className="bye">Bye.</h1>

     </div>
   </div>

  </div>
    )

}

export default Home;