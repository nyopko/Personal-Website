import React from 'react';
import Grid from '@material-ui/core/Grid';
// import './style.css';

function Header() {
    return (
        <div id="headerText">
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <h1>Content Box 1</h1>
                <h1>Content Box 2</h1>
                <h1>Content Box 3</h1>
            </Grid>
        </div>

    );
}

export default Header;