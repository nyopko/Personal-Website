/// Components import
import React, { Component } from 'react';

// Content import
import TitlePageWrapper from '../Components/TitlePageWrapper';
import SocialLinks from '../Components/SocialLinks';
import bgimg from "../Components/img/bgimg.jpg";


class App extends Component {
  render() {
    return (
      <div className="homePage">
        <div id="bgImgContainer">
                  <img id="backgroundImage" src={bgimg} alt="Marketing"></img>
               </div>
             
      <TitlePageWrapper />
      <SocialLinks />
      </div> 
      
    );
  }
}

export default App;