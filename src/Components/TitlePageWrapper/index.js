import React from 'react';
import $ from "jquery";
import bgimg from "../img/bgimg.jpg";
import Nav from "../Nav";

// Grid 
import Grid from '@material-ui/core/Grid';



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
                  <img id="backgroundImage" src={bgimg} alt="Marketing"></img>

                  <h1 class="homeText"> Nick Yopko<br />can help you<br /> with<br /></h1>
                  <h1 class="squareIdent">it all.</h1>
               </Grid>
                        
                     <div class="squares">
                        <div id="square1" data-text="marketing."> <img id="three" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png" /></div>
                        <div class="square2" data-text="coding."><img id="three" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png" /></div>
                        <div class="square3" data-text="writing."><img id="three" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png" /></div>
                        <div class="square4" data-text="I am Square 4"></div>
                        <div class="square5" data-text="I am Square 5"></div>
               
                     </div>
         </div>
      );
   }
}
export default TitlePageWrapper;