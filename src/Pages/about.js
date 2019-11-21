/// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


// Content import
import SubPageHeader from '../Components/AboutHeader';
import Nav from "../Components/Nav";
import ProfilePic from "../Components/img/profilepic.jpg";
import codecomp from "../Components/img/codecomp.jpg";
import writing from "../Components/img/writing.jpg";
import typing from "../Components/img/typing.jpg";
import {MdKeyboardArrowDown} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";
import {MdKeyboardArrowLeft} from "react-icons/md";

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
                    {/* <SubPageHeader /> */}
                    <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    >
                        <h3 className="picIcon"><MdKeyboardArrowRight /></h3>
                    <img id="aboutMePic" src={ProfilePic} />
                    <h3 className="picIcon"><MdKeyboardArrowLeft /></h3>
                </Grid>
                    <Grid
                        container
                        direction="column"
                        justify="space-evenly"
                        alignItems="center"
                    >
                        <div className="textSection">
                            <h3 className="bioText"><b className="boldWordsTitle">Hey, I’m Nick.</b></h3> 
                            <p className="bioText"> Since I was about seven years old, I’ve been the unofficial IT technician for my family. This essentially means I’m the superhero who can magically make the internet come back on. (Spoiler Alert: Yes, all I do is unplug it then plug it back in again).</p>
                            <p className="bioText">Somehow, after breaking countless old computers, video cameras, and video game systems as a child, I was able to pick up enough knowledge to actually understand the technology behind these now broken things. Hours upon hours were spent surfing the internet on my PSP’s web browser (laptops were too expensive back then) watching tech videos for fun and indirectly learning new things.</p>
                            <p className="bioText">So what’s a young <b className="boldWords">technology-minded</b> student to do after high school? Get a <b className="boldWords">marketing degree</b> of course! Yeah, I didn’t see that coming either…</p> 
                            <div className="aboutIcon"><MdKeyboardArrowDown /></div>

                        </div>
                        <img className="aboutMePicBreak" src={typing} />
                        <div className="textSection">
                            <h3 className="bioBold"><b className="boldWordsTitle">Digital Marketing Fun</b></h3>
                            <p className="bioText">In the first two years of my college career, my brain was filled with indecisive thoughts similar to how my stomach was filled with instant ramen. I was constantly asking myself things like: Did I make the right choice? Do I want to get into marketing? Why do I have to take a physics class for a <b className="boldWords">business degree</b>? But then as I started to get into my major-specific courses, it all started to make sense.</p>
                            <p className="bioText">I gravitated towards digital marketing because I’ve always enjoyed how creative the work could be, and how much technology is implemented. Plus, anything with the word “digital” in front of it just sounds cool. After graduating college, while <b className="boldWords">solving problems and implementing creative solutions </b> in both the medical equipment and entertainment industries (not quite peanut butter and jelly, but a good mix nonetheless) I truly realized how much more there is to the field and made the decision to dive in a little deeper.</p>
                            <p className="bioText">I understood that my strengths were both <b className="boldWords">technology</b> and <b className="boldWords">communication</b>. As I mentioned earlier, the former was from the technological ineptitude of my family, while the latter was developed due to the fact that my family is the loud Italian type and the only way I could get someone to pass the food was to speak up (see: yell).</p>
                            <p className="bioText">Which brings me to the next pillar in my professional life...</p> 
                        </div>
                        <img className="aboutMePicBreak" src={writing} />
                        <div className="textSection">
                            <h3 className="bioBold"><b className="boldWordsTitle">Words and Such</b></h3>
                            <p className="bioText">The bad jokes throughout this bio would make you think otherwise, but believe it or not, I’m actually a pretty decent writer.</p>
                            <p className="bioText">Realizing that after years of subjecting my eardrums to irresponsibly loud speakers and working in the music world, I accrued a bounty of industry insight, random facts, and the ability to make fun of the music I love (the most important skill in my opinion). This led me to <b className="boldWords">becoming a contributing writer for a major dance music publication.</b></p>
                            <p className="bioText">I do not believe I was a good writer when I first started. I had no formal training and was fueled only by my <b className="boldWords">passion for expression</b>. I believe I was an <b className="boldWords">excellent communicator</b>, but my writing needed work. Luckily for me, I’ve had some amazing mentors over the years who have helped me find my voice and blossom into a <b className="boldWords">strong, confident writer.</b></p>
                            <p className="bioText">Through equal parts of my <b className="boldWords">hard work</b>, excellent advice, and my bosses’ forgiveness when my attempts at including puns fell flat, I was able to rise through the ranks and <b className="boldWords">become an associate editor</b>. This has allowed me to talk to artists I admire, cover some of the world’s biggest festivals, and ultimately leave behind a record of the music I love.</p>
                            <p className="bioText">You may be wondering what someone who works full time in marketing and writes articles on the weekend would do with what little free time they have left? <b className="boldWords">Obviously, the only reasonable answer is to go to night school for web development</b> , cause who needs sleep when they keep coming out with more delicious flavors of coffee.</p> 
                        </div>
                        <img className="aboutMePicBreak" src={codecomp} />
                        <div className="textSection">
                            <h3 className="bioBold"><b className="boldWordsTitle">Beeps and Boops</b></h3>
                            <p className="bioText">It all comes back to this... the newest and nerdiest addition to my repertoire.</p>
                            <p className="bioText">My whole life, all I've wanted to do was create. I had many ideas for websites, creative marketing campaigns and more, which prompted me to say to myself: “Nick, you love computers and you used to create your own homebrew iPhone themes (sorry Tim Cook), why don’t you start making these ideas a reality?”</p>
                            <p className="bioText">I decided to take a few coding classes online and instantly fell in love. I realized that not only was I picking up on everything naturally due to my creative and logical nature, there were no limits to what I could create. This led me to <b className="boldWords">enroll in a Full-Stack Coding Bootcamp</b> and learn what it takes to <b className="boldWords">develop web applications</b> and allow me to take on my own projects, like <b className="boldWords">this website you’re visiting right now.</b></p>
                            <p className="bioText">Through the skills I obtained, I was able to <b className="boldWords">volunteer at the NASA Glenn Research Center’s Student Day Hackathon</b> and help the next generation of scientists create truly outstanding projects. Sadly, this wasn’t enough to get me on the next space shuttle trip, but fingers crossed they’ll change their minds.</p>
                        </div>

                        <div className="textSection">
                            <h3 className="bioBold"><b className="boldWordsTitle">To Be Continued!</b></h3>
                            <p className="bioText">I created this site to help me <b className="boldWords">find new opportunities and expand my career</b>. I’ve included sections on each of my three major skills with examples of my work and an online resume for easy access. If you think I would fit in with your company or team, please feel free to <a href="/resume">contact me</a> anytime. I would love to talk more about any potential opportunities and share more experiences with you!</p>
                            <p className="bioText">- Nick Yopko</p> 
                        </div>


                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;