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
                        <Carousel showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true} autoPlay={true}>
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
                        <p className="codingText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices orci vulputate, interdum eros ut, sodales arcu. Proin ac ex vitae libero commodo imperdiet in nec dui. Cras vitae mauris a sapien fringilla molestie. In hac habitasse platea dictumst. Pellentesque augue libero, feugiat sit amet sem nec, auctor commodo nunc. In elementum vitae felis nec placerat. Donec pulvinar, turpis non faucibus pellentesque, nisi leo venenatis lacus, vel placerat eros turpis eu felis. Ut ac risus arcu. Fusce porta iaculis felis, id cursus sapien mattis id. Proin congue sollicitudin sagittis. Nulla viverra finibus mauris, et luctus nunc. Suspendisse magna felis, malesuada id ex non, ullamcorper fermentum neque. Suspendisse fringilla quis velit eget semper.

Sed pharetra facilisis magna, vitae volutpat tellus ultrices sit amet. Sed pretium orci quis ipsum tristique aliquet. Donec vitae arcu tortor. Curabitur at sapien in turpis porttitor fringilla eget condimentum mi. Etiam eget nunc quis libero mattis iaculis. Vivamus maximus euismod libero, ut convallis quam varius quis. Proin lectus est, pharetra non tempor eget, molestie quis tellus.</p>
<div className="picCarousel">
                        <Carousel showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true} autoPlay={true}>
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
                        <p className="codingText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices orci vulputate, interdum eros ut, sodales arcu. Proin ac ex vitae libero commodo imperdiet in nec dui. Cras vitae mauris a sapien fringilla molestie. In hac habitasse platea dictumst. Pellentesque augue libero, feugiat sit amet sem nec, auctor commodo nunc. In elementum vitae felis nec placerat. Donec pulvinar, turpis non faucibus pellentesque, nisi leo venenatis lacus, vel placerat eros turpis eu felis. Ut ac risus arcu. Fusce porta iaculis felis, id cursus sapien mattis id. Proin congue sollicitudin sagittis. Nulla viverra finibus mauris, et luctus nunc. Suspendisse magna felis, malesuada id ex non, ullamcorper fermentum neque. Suspendisse fringilla quis velit eget semper.

Sed pharetra facilisis magna, vitae volutpat tellus ultrices sit amet. Sed pretium orci quis ipsum tristique aliquet. Donec vitae arcu tortor. Curabitur at sapien in turpis porttitor fringilla eget condimentum mi. Etiam eget nunc quis libero mattis iaculis. Vivamus maximus euismod libero, ut convallis quam varius quis. Proin lectus est, pharetra non tempor eget, molestie quis tellus.</p>

<div className="picCarousel">
                        <Carousel showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true} autoPlay={true}>
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
                        <p className="codingText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices orci vulputate, interdum eros ut, sodales arcu. Proin ac ex vitae libero commodo imperdiet in nec dui. Cras vitae mauris a sapien fringilla molestie. In hac habitasse platea dictumst. Pellentesque augue libero, feugiat sit amet sem nec, auctor commodo nunc. In elementum vitae felis nec placerat. Donec pulvinar, turpis non faucibus pellentesque, nisi leo venenatis lacus, vel placerat eros turpis eu felis. Ut ac risus arcu. Fusce porta iaculis felis, id cursus sapien mattis id. Proin congue sollicitudin sagittis. Nulla viverra finibus mauris, et luctus nunc. Suspendisse magna felis, malesuada id ex non, ullamcorper fermentum neque. Suspendisse fringilla quis velit eget semper.

Sed pharetra facilisis magna, vitae volutpat tellus ultrices sit amet. Sed pretium orci quis ipsum tristique aliquet. Donec vitae arcu tortor. Curabitur at sapien in turpis porttitor fringilla eget condimentum mi. Etiam eget nunc quis libero mattis iaculis. Vivamus maximus euismod libero, ut convallis quam varius quis. Proin lectus est, pharetra non tempor eget, molestie quis tellus.</p>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;