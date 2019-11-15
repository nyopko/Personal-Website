import React from 'react';
import Grid from '@material-ui/core/Grid';

function SubPageHeader() {
    return (
        <div id="subPageHeader">
            <Grid container spacing={3}>
                <Grid item xs>
                    <a className="subPageLinks" href="/about">About</a>
                </Grid>
                <Grid item xs>
                <a className="subPageLinks" href="/marketing">Marketing</a>
                </Grid>
                <Grid item xs>
                <a className="subPageLinks" href="/coding">Coding</a>
                </Grid>
                <Grid item xs>
                <a className="subPageLinks" href="/writing">Writing</a>
                </Grid>
                <Grid item xs>
                <a className="subPageLinks" href="/resume">Resume</a>
                </Grid>
            </Grid>
        </div>

    );
}

export default SubPageHeader;