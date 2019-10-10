/// Components import
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Content import
import TitlePageWrapper from '../Components/TitlePageWrapper';


class App extends Component {
  render() {
    return (
      <div className="homePage">
      <TitlePageWrapper 
      />
      </div>
    );
  }
}

export default App;