import React from 'react';
import Grid from '@material-ui/core/Grid';

function SubPageHeader() {
    return (
        <div id="subPageHeader">
            <h1 id="subPageHeader">Nick Yopko</h1>
            <Grid container spacing={3}>
                <Grid item xs>
                    <a href="/about">About</a>
                </Grid>
                <Grid item xs>
                <a href="/marketing">Marketing</a>
                </Grid>
                <Grid item xs>
                <a href="/coding">Coding</a>
                </Grid>
                <Grid item xs>
                <a href="/writing">Writing</a>
                </Grid>
                <Grid item xs>
                <a href="/resume">Resume</a>
                </Grid>
            </Grid>
        </div>

    );
}

export default SubPageHeader;