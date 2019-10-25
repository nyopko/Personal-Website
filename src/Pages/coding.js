/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


// Content import
import SubPageHeader from '../Components/AboutHeader';
import Nav from "../Components/Nav";

// Image Import
import space from "../Components/img/space.png"; 
import planets from "../Components/img/planets.png"; 
import search from "../Components/img/search.png";
import results from "../Components/img/results.png";  
import rover from "../Components/img/rover.png"; 
import saturn from "../Components/img/saturn.png";


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
                        <div id="picCarousel">
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
                        <img src="https://via.placeholder.com/500x300" />
                        <p className="codingText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices orci vulputate, interdum eros ut, sodales arcu. Proin ac ex vitae libero commodo imperdiet in nec dui. Cras vitae mauris a sapien fringilla molestie. In hac habitasse platea dictumst. Pellentesque augue libero, feugiat sit amet sem nec, auctor commodo nunc. In elementum vitae felis nec placerat. Donec pulvinar, turpis non faucibus pellentesque, nisi leo venenatis lacus, vel placerat eros turpis eu felis. Ut ac risus arcu. Fusce porta iaculis felis, id cursus sapien mattis id. Proin congue sollicitudin sagittis. Nulla viverra finibus mauris, et luctus nunc. Suspendisse magna felis, malesuada id ex non, ullamcorper fermentum neque. Suspendisse fringilla quis velit eget semper.

Sed pharetra facilisis magna, vitae volutpat tellus ultrices sit amet. Sed pretium orci quis ipsum tristique aliquet. Donec vitae arcu tortor. Curabitur at sapien in turpis porttitor fringilla eget condimentum mi. Etiam eget nunc quis libero mattis iaculis. Vivamus maximus euismod libero, ut convallis quam varius quis. Proin lectus est, pharetra non tempor eget, molestie quis tellus.</p>

                        <img src="https://via.placeholder.com/500x300" />
                        <p className="codingText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices orci vulputate, interdum eros ut, sodales arcu. Proin ac ex vitae libero commodo imperdiet in nec dui. Cras vitae mauris a sapien fringilla molestie. In hac habitasse platea dictumst. Pellentesque augue libero, feugiat sit amet sem nec, auctor commodo nunc. In elementum vitae felis nec placerat. Donec pulvinar, turpis non faucibus pellentesque, nisi leo venenatis lacus, vel placerat eros turpis eu felis. Ut ac risus arcu. Fusce porta iaculis felis, id cursus sapien mattis id. Proin congue sollicitudin sagittis. Nulla viverra finibus mauris, et luctus nunc. Suspendisse magna felis, malesuada id ex non, ullamcorper fermentum neque. Suspendisse fringilla quis velit eget semper.

Sed pharetra facilisis magna, vitae volutpat tellus ultrices sit amet. Sed pretium orci quis ipsum tristique aliquet. Donec vitae arcu tortor. Curabitur at sapien in turpis porttitor fringilla eget condimentum mi. Etiam eget nunc quis libero mattis iaculis. Vivamus maximus euismod libero, ut convallis quam varius quis. Proin lectus est, pharetra non tempor eget, molestie quis tellus.</p>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;