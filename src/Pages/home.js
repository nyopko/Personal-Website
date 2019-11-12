/// Components import
import React, { Component } from 'react';

// Content import
import TitlePageWrapper from '../Components/TitlePageWrapper';


class App extends Component {
  render() {
    return (
      <div className="homePage">
      <div id="menu">
      <TitlePageWrapper />
      </div>

      </div>
    );
  }
}

export default App;