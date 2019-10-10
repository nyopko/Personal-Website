/// Components import
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



/// Stylesheet import 

import './App.css';

/// Pages import

import Home from "./Pages/home.js";
import About from "./Pages/about.js";
import Marketing from "./Pages/marketing.js";
import Coding from "./Pages/coding.js";
import Editoral from "./Pages/editoral.js";
import Resume from "./Pages/resume.js";




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/marketing" component={Marketing} />
            <Route exact path="/coding" component={Coding} />
            <Route exact path="/writing" component={Editoral} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
