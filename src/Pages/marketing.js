/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';



// Content import
import SubPageHeader from '../Components/AboutHeader';
import Nav from "../Components/Nav";


class App extends Component {
    render() {
        return (
            <div className="marketingPage">
                <Nav />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <SubPageHeader />
                    <h1 classname="pageHeaders">Marketing</h1>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <img src="https://via.placeholder.com/500x300" />
                        <div className="textSection">
                            <p className="bioText"> Whether it’s content creation, planning, or execution, my varied background in both traditional and digital marketing, allows me to provide creative solutions to projects across multiple industries. </p>
                            <p className="bioText">While working in the medical field, I assisted both the home and clinical sales departments with a variety of traditional marketing operations. Much of my work revolved around the creation of physical marketing material, as well as updating the outdated material to both showcase the current product line and make it more visually appealing.</p>
                            <p className="bioText">My most notable creation was an all-in-one, interactive, and fully customizable sales form, which greatly improved the ordering process. The form received glowing feedback from many physicians and their staff and was featured at a leading industry trade show. </p> 
                            <p className="bioText">In order to better assist both the CEO and the managerial staff, I was added to the company’s marketing review board in order to offer insight and assist with strategic planning. To prepare for this I both maintained and analyzed several large-scale databases while creating reports on the data collected. </p>
                            <p className="bioText">On the entertainment side of things, my efforts were focused almost entirely in the digital realm. While working with one of Cleveland’s leading dance music promoters, I took on many different projects including but not limited to managing and organizing a promotional street team and interns, writing and distributing press releases, and managing and creating content for our social media channels. Through our hard work, we were able to successfully host dozens of profitable events, with the shows’ scale increasing every season.</p>
                            <p className="bioText">Through my varied background consisting of both traditional and digital marketing skills, I believe I can become a valuable asset to your team. If there are any roles on your team that you think I would be a good fit for, please contact me. I would love to talk about any opportunities to showcase my abilities and how I can help you reach your goals. </p>
                            <a id="resumeButtonDesktop" className="btn btn-dark" href="https://drive.google.com/drive/folders/1gDotABOpLIwIJUlUGTrnee2HDiFat5Dk" role="button">Download Resume</a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;