/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


// Content import
import SubPageHeader from '../Components/AboutHeader';


class App extends Component {
    render() {
        return (
            <div className="resumePage">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <SubPageHeader />
                </Grid>
            </div>
        );
    }
}

export default App;