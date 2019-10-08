/// Components import
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";



/// Stylesheet import 

import './App.css';

/// Pages imports 



class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Header />
      </div>
    );
  }
}

export default App;
