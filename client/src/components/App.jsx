import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Layout/Footer";

const App = () => {
   
   
   return (<body>
            <Router>
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route path = "/home" component={Home} />
                <Route path = "/work" component ={Work} />
                <Route path = "/contact" component={Contact} />
                
            </Switch>
            </Router>

            <Footer />

            </body>

    );
}

export default App;