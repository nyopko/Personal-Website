import React from 'react';
import Grid from '@material-ui/core/Grid';

function HomeHeader() {
    return (
        <div id="homePageHeader">
            <Grid container spacing={3}>
                <Grid item xs>
                    <a className="homePageLinks" href="/about">About</a>
                </Grid>
                <Grid item xs>
                <a className="homePageLinks" href="/marketing">Marketing</a>
                </Grid>
                <Grid item xs>
                <a className="homePageLinks" href="/coding">Coding</a>
                </Grid>
                <Grid item xs>
                <a className="homePageLinks" href="/writing">Writing</a>
                </Grid>
                <Grid item xs>
                <a className="homePageLinks" href="/resume">Resume</a>
                </Grid>
            </Grid>
        </div>

    );
}

export default HomeHeader;