import React from 'react';
import Header from "../Header";
import Venn from "../Venn";

// Grid 
import Grid from '@material-ui/core/Grid';



function TitlePageWrapper() {
   return (
      <div className="TitlePageWrapper">
         <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
         >
         <Header />
         <Venn />
         </Grid>
      </div>
   );
}

export default TitlePageWrapper;