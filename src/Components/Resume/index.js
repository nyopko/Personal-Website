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
                <h1 id="resumeName">My Resume</h1>
                <p id="resumeLinks">(440) 488-3436 &#8226; <a href="mailto: nickyopko@gmail.com">nickyopko@gmail.com</a> <a href="https://www.linkedin.com/in/yopko/">linkedin.com/in/yopko</a> </p>
                <hr />
                <h4 class="resumeHeaders">CAREER OBJECTIVE</h4>
                <p class="resumeDetails">Digital Marketing Specialist seeking opportunities to work on creative, high-tech marketing campaigns and related projects in the technology world.</p>
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
                Responsible for all of the company’s effective digital marketing efforts including social media, street team/guerilla marketing, public relations, and more.
                    <ul>
                        <li>Worked directly with the CEO in order to match the marketing efforts with the company’s vision.</li>
                        <li>Helped Cumulus Entertainment become one of the premier dance music promoters in Ohio, and helped foster partnerships with some of the world’s biggest promoters and venues.</li>
                    </ul>
                </p>
                <p class="resumeDetails">
                <b>EDM.com</b>
                <br />
                <i>Associate Editor, 03/2017- Present</i>
                Assign, edit, and publish content on behalf of our international writing staff for an audience of over 2 million.
                    <ul>
                        <li>Work hand-in-hand with the Editor-in-Chief and CEO to plan and execute and implement content campaigns.</li>
                        <li>An eye for news and trending content, responsible for many major story breaks, features, and high-profile interviews.</li>
                        <li>Very skilled in identifying trends on social media and creating unique content aligned with the trending topics and buzzwords.</li>
                    </ul>
                </p>
                <h4 class="resumeHeaders">EDUCATION</h4>
                <p class="resumeDetails">
                <b>Bachelor of Business Administration - Marketing</b> (2015)
                <br />
                Kent State University, Kent, Ohio
                <br />
                Graduated magna cum laude. Minor in Public Communication 
                </p>
                <p class="resumeDetails">
                <b>Full-Stack Coding Bootcamp</b> (2019)
                <br />
                Case Western Reserve University, Cleveland, Ohio
                <br />
                Languages learned: HTML/CSS, Javascript, Node.js, MongoDB/Mongoose, MySQL/Sequelize, Express, Bootstrap, jQuery, and more. (Portfolio/Examples available upon request.)
                </p>

            </Grid>
        </div>

    );
}

export default Resume;