import React from "react";
import {Link} from "react-router-dom";

const Contact = () => {
    return(<div className ="contactBody">

            <div>

                <h1>Contact me.</h1>

            </div>
            <div className="contactForm">
            <form action="https://formspree.io/mzbjlqor" method="POST">
            <div class="input-group">
                 <input type="text" name="name" required />
                 <span class="highlight"></span>
                 <span class="bar"></span>
                <label>Name</label>
            </div>

            <div class="input-group">
                <input type="email" name="_replyto" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
            </div>

            <div class="input-group">
                <input type="text" name="message" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Message</label>
            </div>

            <div className="buttonPosition">
                <button type="submit" value="Send"> Submit </button>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </form>
        </div>

        </div>
       
    )
}

export default Contact;