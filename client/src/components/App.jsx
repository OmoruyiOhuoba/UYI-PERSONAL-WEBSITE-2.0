import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Layout/Footer";

const App = () => {
   
   
   return (<div>
            <Router>
            <NavBar />
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route path = "/home" component={Home} />
                <Route path = "/work" componet ={Work} />
                <Route path = "/contact" component={Contact} />
                
            </Switch>
            </Router>

            <Footer />

            </div>

    );
}

export default App;