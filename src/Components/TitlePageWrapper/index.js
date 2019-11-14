import React from 'react';
import $ from "jquery";
import bgimg from "../img/bgimg.jpg";
import Nav from "../Nav";
import HomeHeader from "../HomeHeader";

// Grid 
import Grid from '@material-ui/core/Grid';

// icons
import {FaLaptopCode} from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import {FaBriefcase} from "react-icons/fa";
import SocialLinks from '../SocialLinks';


class TitlePageWrapper extends React.Component {
   componentDidMount() {
      $(".squares > *").hover(function () {
         $(".squareIdent").text($(this).attr("data-text"));
         $(".squareIdent").stop().animate({
            opacity: 1
         }, 500);
      }, function () {
         $(".squareIdent").text("it all.");
      });
   }
   render() {
      return (
         <div className="TitlePageWrapper">
            <Nav />
            <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
            <HomeHeader />
            </Grid>
               <Grid
               container
               direction="column"
               justify="center"
               alignItems="center"
               >
               <div id="bgImgContainer">
                  <img id="backgroundImage" src={bgimg} alt="Marketing"></img>
               </div>
                  <h1 class="homeText"> Nick Yopko<br />can help you<br /> with<br /></h1>
                  <h1 class="squareIdent">it all.</h1>
               </Grid>
                        
                     <div class="squares">
                        <div id="square1" data-text="marketing.">
                        <h3><FaBriefcase /><br />Marketing</h3>
                        </div>
                        <div id="square2" data-text="coding.">
                        <h3><FaLaptopCode /><br />Coding</h3>   
                        </div>
                        <div id="square3" data-text="writing.">
                        <h3><FaPencilAlt /><br />Writing</h3>   
                        </div>
                     </div>
               <SocialLinks />           
         </div>
      );
   }
}
export default TitlePageWrapper;