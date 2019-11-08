/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


// Content import
import SubPageHeader from '../Components/AboutHeader';
import Nav from "../Components/Nav";


class App extends Component {
    render() {
        return (
            <div className="writingPage">
                <Nav />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <SubPageHeader />
                    <hr />
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <div className="quoteContainer">
                        <h1 className="quoteHeader">"Either write something worth reading or do something worth writing."</h1>
                        <p className="quoteAuthor"><b>- Benjamin Franklin</b></p>
                        </div>
                        <div className="textSection">
                            <p className="bioText">This is the section where I write about my writing… very meta, I know.</p>
                            <p className="bioText">I took a fairly non-traditional route to get where I am as a writer. On this page, you will not find a fancy journalism or English literature degree, but rather someone realizing their passion and running with it.</p>
                            <p className="bioText">I was hesitant to even apply for the position but after some encouragement from a friend, I took the plunge and submitted my application. Thankfully, they decided to take a chance on me, and my writing career was off to the races.</p> 
                            <p className="bioText">Over the past few years, I’ve made my way from contributing writer to associate editor at EDM.com. Being able to jump right into one of the world’s leading dance music publications was an amazing opportunity that has really helped me grow in almost every aspect of my career.</p>
                            <p className="bioText">With over 400+ published articles to my name, including everything from news stories, long-form features, satire, listicles, interactive quizzes, interviews, and beyond, I’ve worked my way into becoming a multi-faceted and adaptable writer.</p>
                            <p className="bioText">Through help from my mentors and my own hard work, I have gained the ability to self-edit with ease. In addition to this, I feel one of my biggest strengths is how I can identify the interests of an audience and dig for stories that will engage the readers while being informative. This has led to countless breaking and viral stories that I’ve either authored or assisted on.</p>
                            <p className="bioText">Some prominent stories I’ve crafted over the years include <a href="https://edm.com/features/chandler-riggs-pixel-festival">an interview with The Walking Dead’s Chandler Riggs</a>, <a href="https://edm.com/features/fornite-marshmello-event">my review of Marshmello’s record-breaking Fortnite crossover event</a>, and <a href="https://edm.com/news/mosquito-reproduction-skrillex">my coverage on scientists’ discovering that Skrillex’s music affects mosquito mating habits</a>. The last of the listed articles would go on to become a massively viral story covered by major news publications all over the world. </p>
                            <p className="bioText">Despite honing my communication skills, my tenure as an associate editor has helped me better understand how to manage a team, analyze page analytics, network with industry professionals, and how to better understand a target market.</p>
                            <a id="resumeButtonDesktop" className="btn btn-dark" href="https://edm.com/author/nick-yopko" role="button">My Writer's Profile</a>
                            <p className="bioText">If this sounds like something you’re looking for in an employee, I encourage you to reach out to me. I would love to share more information on my background and experience, as well as discuss how my skills can help your organization reach its goals.</p>
                            <p className="bioText"></p>
                            <a id="resumeButtonDesktop" className="btn btn-dark" href="https://drive.google.com/drive/folders/1gDotABOpLIwIJUlUGTrnee2HDiFat5Dk" role="button">Download Resume</a>
                            </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;