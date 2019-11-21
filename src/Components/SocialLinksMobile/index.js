import React from 'react';
import Grid from '@material-ui/core/Grid';

// icons
import {FaFacebookSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

function SocialLinksMobile() {
    return (
        <div id="socialLinksmobile">   
               <Grid
               container
               direction="row"
               justify="center"
               alignItems="center"
               >
                  <div className="socialIcons"><a className="iconLinks" href="https://www.linkedin.com/in/yopko/"><FaLinkedin /></a></div>
                  <div id="github" className="socialIcons"><a className="iconLinks" href="https://github.com/nyopko"><FaGithubSquare /></a></div>
                  <div className="socialIcons"><a className="iconLinks" href="https://www.facebook.com/yopko"><FaFacebookSquare /></a></div>
               </Grid> 
            </div> 
    );
}

export default SocialLinksMobile;