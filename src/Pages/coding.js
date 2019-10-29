/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


// Content import
import SubPageHeader from '../Components/AboutHeader';
import Nav from "../Components/Nav";

// Image Import

/// space education pics
import space from "../Components/img/space.png"; 
import planets from "../Components/img/planets.png"; 
import search from "../Components/img/search.png";
import results from "../Components/img/results.png";  
import rover from "../Components/img/rover.png"; 
import saturn from "../Components/img/saturn.png";

/// firefighter pics
import chief from "../Components/img/chief.png";
import addequip from "../Components/img/addequip.png";
import certs from "../Components/img/certs.png";
import crew from "../Components/img/crew.png";
import fire from "../Components/img/fire.png";
import logs from "../Components/img/logs.png";
import equiplog from "../Components/img/equiplog.png";

/// audio rain pics
import audiorain from "../Components/img/audiorain.png";
import album from "../Components/img/album.png";
import related from "../Components/img/related.png";


class App extends Component {
    render() {
        return (
            <div className="codingPage">
                <Nav />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <SubPageHeader />
                    <h1 classname="pageHeaders">Coding</h1>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <div className="picCarousel">
                        <Carousel showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={true}>
                            <div>
                                <img src={space} />
                                <p className="legend">Space Education Homescreen</p>
                            </div>
                            <div>
                                <img src={planets} />
                                <p className="legend">Interactive Solar System Map</p>
                            </div>
                            <div>
                                <img src={saturn} />
                                <p className="legend">Planet Information from Map</p>
                            </div>
                            <div>
                                <img src={rover} />
                                <p className="legend">Mars Rover API Photo Page</p>
                            </div>
                            <div>
                                <img src={search} />
                                <p className="legend">Custom NASA Database Search Page</p>
                            </div>
                            <div>
                                <img src={results} />
                                <p className="legend">Example Search Results</p>
                            </div>
                        </Carousel>
                    </div>
                        <p className="codingText">
                            <h5 className="projectName">
                                Space Education
                                </h5>
                                A React-powered web application created to help teach kids of all ages about the wonders of space and beyond. Using multiple NASA APIs we were able to create a variety of activities that are interactive, educational, and most importantly, fun. Users can view NASA’s astronomy picture of the day, view images from the three Mars rovers, explore an interactive map of the solar system, and see which near-Earth objects are flying by us today.
                                <br />
                                (Due to group time restrictions, this application is not currently mobile-friendly.)
                                <br />
                                <a className="codeLinks" href="https://space-education.herokuapp.com/">See for yourself!</a>
                                <br />
                                <a className="codeLinks" href="https://github.com/nyopko/planet-app-fork">View Source on Github</a>
                            </p>
<div className="picCarousel">
                        <Carousel showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={true}>
                            <div>
                                <img src={fire} />
                                <p className="legend">Firefighter's Friend Application</p>
                            </div>
                            <div>
                                <img src={crew} />
                                <p className="legend">Crew List from Database</p>
                            </div>
                            <div>
                                <img src={chief} />
                                <p className="legend">Specific Crew Memeber Detail from Database</p>
                            </div>
                            <div>
                                <img src={certs} />
                                <p className="legend">Add or Edit Certifications for Crew Member</p>
                            </div>
                            <div>
                                <img src={addequip} />
                                <p className="legend">Add New Equipment to Database</p>
                            </div>
                            <div>
                                <img src={logs} />
                                <p className="legend">Example Logs from Database</p>
                            </div>
                            <div>
                                <img src={equiplog} />
                                <p className="legend">More Database Examples</p>
                            </div>
                        </Carousel>
                    </div>
                        <p className="codingText">
                        <h5 className="projectName">
                            Firefighter's Friend
                            </h5>
                            A back-end focused application that provides a queryable database for firehouse management information. With the vast number of certifications each firefighter has, plus the enormous amount of equipment each firehouse holds and utilizes, there needed to be an easily-readable way to manage it. Using MySQL/Sequelize, Firefighter's Friend allows users to add crew or equipment to the database and then edit each item’s attributes and add or remove certifications as needed.

                                <br />
                                <a className="codeLinks" href="https://firefightersfriend.herokuapp.com/">See for yourself!</a>
                                <br />
                                <a className="codeLinks" href="https://github.com/nyopko/SecondGroupProject">View Source on Github</a>
                            </p>

<div className="picCarousel">
                        <Carousel showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={true}>
                            <div>
                                <img src={audiorain} />
                                <p className="legend">Audio Rain Application</p>
                            </div>
                            <div>
                                <img src={album} />
                                <p className="legend">Album Results Page</p>
                            </div>
                            <div>
                                <img src={related} />
                                <p className="legend">Visitor Log and Related Artists</p>
                            </div>
                        </Carousel>
                    </div>
                        <p className="codingText">
                        <h5 className="projectName">
                            Audio Rain
                            </h5>
                            A simple, but fun application created in the early stages of my education that allows the user to receive album suggestions based on the weather in their selected location. Using both the OpenWeather and MusixMatch APIs, Audio Rain correlates the location’s weather to an album based on mood. The user will also receive similar artists to the one given, based on the album’s metadata and be able to see what album was recommended to the five most recent users prior to their search.
                                <br />
                                <a className="codeLinks" href="https://syddunlap.github.io/firstgroupproject/">See for yourself!</a>
                                <br />
                                <a className="codeLinks" href="https://github.com/nyopko/firstgroupproject">View Source on Github</a>
                            </p>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;