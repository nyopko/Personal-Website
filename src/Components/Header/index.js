import React from 'react';
import Grid from '@material-ui/core/Grid';
// import './style.css';

function Header() {
    return (
        <div id="headerText">
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="flex-start"
            >
                <h1 id="nameText">Nick Yopko</h1>
                <p id="bioText">Here's where I'll put something interesting about myself in hopes of getting a sweet job.</p>
            </Grid>
        </div>

    );
}

export default Header;