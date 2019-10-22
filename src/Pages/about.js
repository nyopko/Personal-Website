/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


// Content import
import SubPageHeader from '../Components/AboutHeader';
import Nav from "../Components/Nav";
import ProfilePic from "../Components/img/profilepic.jpg"


class App extends Component {
    render() {
        return (
            <div className="aboutPage">
                <Nav />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <SubPageHeader />
                    <h1 classname="pageHeaders">About Me</h1>
                    <img id="aboutMePic" src={ProfilePic} />
                    <Grid
                        container
                        direction="column"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <div className="textSection">
                            <p className="bioBold"><b>How I got here!</b></p>
                            <p className="bioText">Hey, I’m Nick.</p> 
                            <p className="bioText"> Since I was about seven years old, I’ve been the unofficial IT technician for my family. This essentially means I’m the superhero who can magically make the internet come back on. (Spoiler Alert: Yes, all I do is unplug it then plug it back in again)</p>
                            <p className="bioText">Somehow, after breaking countless old computers, video cameras, and video game systems as a child, I was able to pick up enough knowledge to actually understand the technology behind these now-broken things. Hours upon hours were spent surfing the internet on my PSP’s web browser (laptops were too expensive back then) watching tech videos for fun and indirectly learning new things.</p>
                            <p className="bioText">So what’s a young <b>technology-minded</b> student to do after high school? Get a <b>marketing degree</b> of course! Yeah, I didn’t see that coming either…</p> 
                        </div>
                        <div className="textSection">
                            <p className="bioBold"><b>Digital Marketing Fun</b></p>
                            <p className="bioText">I gravitated towards digital marketing because I’ve always enjoyed how creative the work could be and how much technology and science it implemented. Plus, anything with the word “digital” in front of it just sounds cool. <b>While solving problems and implementing creative solutions in both the medical equipment and entertainment industry</b> (not quite peanut butter and jelly, but a good mix nonetheless) I realized how much more there is to the field and made the decision to dive a little deeper.</p>
                            <p className="bioText">I understood that my strengths were both <b>technology</b> and <b>communication</b>. As mentioned earlier, the former was from the technological ineptitude of my family, while the latter was developed due to the fact that my family is the loud Italian type and the only way I could get someone to pass the food was to speak up. (See: yell)</p>
                            <p className="bioText">Which brings me to the next pillar in my professional life...</p> 
                        </div>

                        <div className="textSection">
                            <p className="bioBold"><b>Words and Such</b></p>
                            <p className="bioText">The bad jokes throughout this bio would make you think otherwise, but believe it or not, I’m actually a pretty decent writer.</p>
                            <p className="bioText">Realizing that after years of subjecting my eardrums to irresponsibly loud speakers and working in the music world, I accrued a bounty of industry insight, random facts, and the ability to make fun of the music I love. (the most important skill in my opinion) This led me to <b>becoming a Contributing Writer for a major dance music publication.</b></p>
                            <p className="bioText">I do not believe I was a good writer when I first started. I had no formal training and was fueled only by my <b>passion for expression</b>. I believe I was an <b>excellent communicator</b>, but my writing needed work. Luckily for me, I’ve had some amazing mentors over the years who have helped me find my voice and blossom into a <b>strong, confident writer.</b></p>
                            <p className="bioText">Through equal parts of my <b>hard work</b>, excellent advice, and my bosses’ forgiveness when my attempts at including puns fall flat, I was able to rise through the ranks and <b>become an Associate Editor</b>. This has allowed me to talk to artists I admire, cover some of the world’s biggest festivals, and ultimately leave behind a record of the music I love.</p>
                            <p className="bioText">You may be wondering what someone who works full-time in marketing and writes articles on the weekend would do with their little free time? <b>Obviously, the only reasonable answer is to go to night school for Web Development</b> , cause who needs sleep when they keep coming out with more delicious flavors of coffee.</p> 
                        </div>

                        <div className="textSection">
                            <p className="bioBold"><b>&lt;h3&gt;&lt;b&gt;fun web developer header here&lt;/b&gt;&lt;/h3&gt;</b></p>
                            <p className="bioText">It all comes back to this...the newest and nerdiest addition to my repertoire.</p>
                            <p className="bioText">My whole life, all I wanted to do was create. I had many ideas for websites, creative marketing campaigns and more, which prompted me to say to myself: “Nick, you love computers and you used to create your own homebrew iPhone themes, (sorry Tim Cook) why don’t you start making these ideas a reality?”</p>
                            <p className="bioText">I decided to take a few coding classes online and instantly fell in love. I realized that not only was I picking up on everything naturally due to my creative and logical nature, there were no limits to what I could create. This led me to <b>enroll in a Full-Stack Coding Bootcamp</b> and learn what it takes to <b>develop web applications</b> and allow me to take on my own projects, like <b>this website you’re visiting right now.</b></p>
                            <p className="bioText">Through the skills I obtained, I was able to <b>volunteer at the NASA Glenn Research Center’s Student Day Hackathon</b> and help the next generation of scientists create truly outstanding projects. Sadly, this wasn’t enough to get me on the next space shuttle trip, but fingers crossed they’ll change their minds.</p>
                        </div>

                        <div className="textSection">
                            <p className="bioBold"><b>To be continued!</b></p>
                            <p className="bioText">I created this site to help me <b>find new opportunities and expand my career</b>. I’ve included sections on each of my three major skills with examples of my work and an online resume for easy access. If you feel I would fit in with your company or team, please feel free to <a href="/resume">contact me</a> anytime. I would love to talk more about any potential opportunities and share more experiences with you!</p>
                            <p className="bioText">- Nick Yopko</p> 
                        </div>


                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;