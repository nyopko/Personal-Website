/// Components import
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";



/// Stylesheet import 

import './App.css';
import TitlePageWrapper from './Components/TitlePageWrapper';

/// Pages imports 



class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Nav /> */}
      <TitlePageWrapper 
      />
      </div>
    );
  }
}

export default App;
