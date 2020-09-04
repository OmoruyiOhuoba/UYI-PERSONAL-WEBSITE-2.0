import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./Layout/NavBar";

const Contact = () => {
    return(<div className ="contactBody">
                <NavBar />
                <br/>
               
            <div>

                <h1>Contact me.</h1>

            </div>
            <div className="contactForm">
            <form action="https://formspree.io/mzbjlqor" method="POST">
            <div class="input-group">
                 <input type="text" name="name" required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label>Your Name</label>
            </div>

            <div class="input-group">
                <input type="email" name="email" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Your Email</label>
            </div>

            <div class="input-group">
                <input type="text" name="message" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Booking Details</label>
            </div>
            <br/>

            <div className="buttonPosition">
                <button type="submit" value="Send"> Submit </button>
                <br/>
                <br/>
              </div>
            </form>
        </div>

        </div>
       
    )
}

export default Contact;