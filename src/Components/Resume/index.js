import React from 'react';
import Grid from '@material-ui/core/Grid';
// import './style.css';

function Resume() {
    return (
        <div id="resumePage">
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
            </Grid>
            <div id="resumeWrapper">
                <div id="resumeContentWrapper">
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                <a id="resumeButton" className="btn btn-dark" href="https://drive.google.com/drive/folders/1gDotABOpLIwIJUlUGTrnee2HDiFat5Dk" role="button" >Download Resume</a>
                <h2 id="resumeName">Nicholas Yopko</h2>
                <a id="resumeButtonDesktop" className="btn btn-dark" href="https://drive.google.com/drive/folders/1gDotABOpLIwIJUlUGTrnee2HDiFat5Dk" role="button">Download Resume</a>
                <br />
                <p id="resumeLinks">(440) 488-3436 &#8226; <a href="mailto: nickyopko@gmail.com">nickyopko@gmail.com</a> &#8226; <a href="https://www.linkedin.com/in/yopko/">linkedin.com/in/yopko</a> </p>
                <hr />
                <h4 class="resumeHeaders">CAREER OBJECTIVE</h4>
                <p class="resumeDetails">Digital Marketing Specialist and Web Developer seeking opportunities to work on creative, high-tech marketing campaigns and related projects in the technology world.</p>
                <h4 class="resumeHeaders">CORE QUALIFICATIONS</h4>
                <p class="resumeDetails">
                    <ul>
                        <li>Experience in Digital Marketing content planning, creation, analytics, and all major social media networks as well as full-stack coding/programming knowledge alongside Microsoft Office, Project Management Software, Content Management, and basic Adobe Creative Suite skills.</li>
                        <li>Professional writer and editor with over 350 articles published.</li>
                    </ul>
                </p>
                <h4 class="resumeHeaders">PROFESSIONAL EXPERIENCE</h4>
                <p class="resumeDetails">
                <b>CUMULUS ENTERTAINMENT</b>, Cleveland, OH
                <br />
                <i>Digital Marketing Manager, 03/2016-Present</i>
                <br />
                Responsible for all of the company’s effective digital marketing efforts including social media, street team/guerilla marketing, public relations, and more.
                    <ul>
                        <li>Worked directly with the CEO in order to match the marketing efforts with the company’s vision.</li>
                        <li>Helped Cumulus Entertainment become one of the premier dance music promoters in Ohio, and helped foster partnerships with some of the world’s biggest promoters and venues.</li>
                    </ul>
                </p>
                <p class="resumeDetails">
                <b>EDM.COM</b>
                <br />
                <i>Associate Editor, 03/2017- Present</i>
                <br />
                Assign, edit, and publish content on behalf of our international writing staff for an audience of over 2 million.
                    <ul>
                        <li>Work hand-in-hand with the Editor-in-Chief and CEO to plan and execute and implement content campaigns.</li>
                        <li>An eye for news and trending content, responsible for many major story breaks, features, and high-profile interviews.</li>
                        <li>Very skilled in identifying trends on social media and creating unique content aligned with the trending topics and buzzwords.</li>
                    </ul>
                </p>
                <p class="resumeDetails">
                <b>NATIONAL BIOLOGICAL CORPORATION</b>, Cleveland OH
                <br />
                <i>Marketing Associate, 05/2017-02/2019</i>
                <br />
                Supported the overall marketing needs of the company while assisting both the home and clinical sales department.
                    <ul>
                    <li>Researched databases to find targeted opportunities for the clinical sales department.</li>
                    <li>Planned, created, and edited various marketing materials including but not limited to brochures, fliers, promotional videos, user manuals, and website content. </li>
                    <li>Developed an all-in-one, interactive prescription and order form saving physicians valuable time, featured at a major dermatology tradeshow.</li>
                    <li>Letter of Recommendation available upon request.</li>
                    </ul>
                </p>
                <h4 class="resumeHeaders">EDUCATION</h4>
                <p class="resumeDetails">
                <b>Bachelor of Business Administration - Marketing</b> (2015)
                <br />
                <i>Kent State University, Kent, Ohio</i>
                <br />
                Graduated magna cum laude. Minor in Public Communication 
                </p>
                <p class="resumeDetails">
                <b>Full-Stack Coding Bootcamp</b> (2019)
                <br />
                <i>Case Western Reserve University, Cleveland, Ohio</i>
                <br />
                <ul>
                <li>Languages learned: HTML/CSS, Javascript, Node.js, MongoDB, Mongoose, MySQL, Sequelize, Express, Bootstrap, jQuery, and more.</li>
                <li>Portfolio or examples available upon request.</li>    
                </ul>
                </p>
                <h4 class="resumeHeaders">VOLUNTEERING</h4>
                <p class="resumeDetails">
                <b>NASA Space Apps</b> (2019)
                <br />
                <i>NASA Glenn Research Center, Cleveland, Ohio</i>
                <br />
                <ul>
                <li>Volunteered at the K-12 student's day hackathon. Helped children operate 3D printers, write basic code, and served as an overall resource for any questions that arised. (Reference availble upon request.)</li>
                </ul>
                </p>
                <p class="resumeDetails">
                <b>Winter Clothing Drive</b>
                <br />
                <i>Kent, Ohio</i>
                <br />
                <ul>
                <li>Organized a volunteer coat drive at Kent State University and the surrounding area. Compltely self-funded by a team of just four students.</li>
                <li>A massive success, we were able to donate many boxes of winter clothing to a local homeless shelter.</li>
                <li>Assisted in everything from collection to social media advertising.</li>
                </ul>
                </p>
            </Grid>
            </div>    
        </div>
        </div>

    );
}

export default Resume;