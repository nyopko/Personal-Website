import React from 'react';
import Grid from '@material-ui/core/Grid';

class Hover extends React.Component {

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
        <div className="Hover">
         <h1>Hover Here</h1>
        </div>
      );
    }
  }
  
  
  export default Hover;