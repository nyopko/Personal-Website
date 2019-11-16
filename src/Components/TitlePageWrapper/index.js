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
      $("#square1").hover(function () {
         $(".squareIdent").text($(this).attr("data-text"));
         $(".squareIdent").stop().animate({
            opacity: 1
         }, 500);
      }, function () {
         $(".squareIdent").text("it all.");
      });

      $("#square2").hover(function () {
         $(".squareIdent").text($(this).attr("data-text"));
         $(".squareIdent").stop().animate({
            opacity: 1
         }, 500);
      }, function () {
         $(".squareIdent").text("it all.");
      });

      $("#square3").hover(function () {
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
               {/* <div id="bgImgContainer">
                  <img id="backgroundImage" src={bgimg} alt="Marketing"></img>
               </div> */}
                  <h1 class="homeText"> Nick Yopko can help you with...</h1>
                  <h1 class="squareIdent">it all.</h1>
            <div class="squares">
               <Grid
               container
               direction="row"
               justify="space-evenly"
               alignItems="center"
               >
                        <div id="square1" data-text="coding.">
                        <a className="homeIconLinks" href="/coding"><h3><FaLaptopCode /><br />Coding</h3></a>
                        </div>
                        <div id="square2" data-text="marketing.">
                        <a className="homeIconLinks" href="/marketing"><h3><FaBriefcase /><br />Marketing</h3></a>   
                        </div>
                        <div id="square3" data-text="writing.">
                        <a className="homeIconLinks" href="/writing"><h3><FaPencilAlt /><br />Writing</h3></a>  
                        </div>
                        </Grid>
                     </div>

               </Grid>          
               {/* <SocialLinks />     */}
         </div>
      );
   }
}
export default TitlePageWrapper;