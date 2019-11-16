//// Components import
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import $ from "jquery";



// Content import
import SubPageHeader from '../Components/AboutHeader';
import Nav from "../Components/Nav";
import SocialLinks from '../Components/SocialLinks';

// icons import
import {FaLaptopCode} from "react-icons/fa";
import {FaPencilAlt} from "react-icons/fa";
import {FaBriefcase} from "react-icons/fa";


class NewHome extends Component {

    componentDidMount() {
        $("#square1").hover(function () {
           $(".squareIdent").text($(this).attr("data-text"));
           $(".squareIdent").stop().animate({
              opacity: 1
           }, 500);
        }, function () {
           $(".squareIdent").text("it all.");
        });
  
        $("#square2").hover(function () {
           $(".squareIdent").text($(this).attr("data-text"));
           $(".squareIdent").stop().animate({
              opacity: 1
           }, 500);
        }, function () {
           $(".squareIdent").text("it all.");
        });
  
        $("#square3").hover(function () {
           $(".squareIdent").text($(this).attr("data-text"));
           $(".squareIdent").stop().animate({
              opacity: 1
           }, 500);
        }, function () {
           $(".squareIdent").text("it all.");
        });
     }

    render() {
        return (
            <div className="NewHomePage">
                <div id="backgroundContain">
                <Nav />
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <SubPageHeader />
                    <h1 className="homeText">Nick Yopko can help<br /> you with...</h1>
                    <h1 className="squareIdent">it all</h1>
                    <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    >
                        <div id="square1" data-text="coding.">
                        <a className="homeIconLinks" href="/coding"><h3><FaLaptopCode /><br />Coding</h3></a>
                        </div>
                        <div id="square2" data-text="marketing.">
                        <a className="homeIconLinks" href="/marketing"><h3><FaBriefcase /><br />Marketing</h3></a>   
                        </div>
                        <div id="square3" data-text="writing.">
                        <a className="homeIconLinks" href="/writing"><h3><FaPencilAlt /><br />Writing</h3></a>  
                        </div>
                    </Grid>
                    <SocialLinks />
                    </Grid>
                    </div>    
            </div>
        );
    }
}

export default NewHome;