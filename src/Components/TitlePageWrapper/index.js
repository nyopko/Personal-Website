import React from 'react';
import Header from "../Header";
import Venn from "../Venn";
import bgimg from "../img/bgimg.jpg";
import Nav from "../Nav";

// Grid 
import Grid from '@material-ui/core/Grid';



function TitlePageWrapper() {
   return (
      <div className="TitlePageWrapper">
         <Nav />
         <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
         >
         <img id="backgroundImage" src= {bgimg} alt="Background Marketing Stock Photo"></img>
         <Header />
         <Venn />
         </Grid>
      </div>
   );
}

export default TitlePageWrapper;