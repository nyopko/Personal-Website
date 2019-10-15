/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


// Content import
import SubPageHeader from '../Components/AboutHeader';
import Resume from "../Components/Resume";
import Nav from "../Components/Nav";


class App extends Component {
    render() {
        return (
            <div className="resumePage">
                <Nav />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <SubPageHeader />
                    <Resume />
                </Grid>
            </div>
        );
    }
}

export default App;