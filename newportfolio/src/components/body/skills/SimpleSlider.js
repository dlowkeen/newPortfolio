import React from "react";
import Slider from "react-slick";
import { Container } from 'semantic-ui-react';
import javaScript from "../../../assets/images/javascript.png";
import jquery from "../../../assets/images/jquery.gif";
import node from "../../../assets/images/node.png";
import express from "../../../assets/images/express.png";
import react from "../../../assets/images/react.png";
import mongodb from "../../../assets/images/mongodb.png";
import git from "../../../assets/images/git.png";
import firebase from "../../../assets/images/firebase.png";
import mysql from "../../../assets/images/mysql.png";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 400
    };
    return <Container>
      <Slider {...settings}>
        <div className="slider-div">
          <img className="skillsLogo" src={javaScript} alt="javascript" />
        </div>
        <div className="slider-div">
          <img className="skillsLogo" src={jquery} alt="jquery" />
        </div>
        <div className="slider-div">
          <img className="skillsLogo" src={node} alt="node" />
        </div>
        <div className="slider-div">
          <img className="expressLogo" src={express} alt="express" />
        </div>
        <div className="slider-div">
          <img className="skillsLogo" src={react} alt="react" />
        </div>
        <div className="slider-div">
          <img className="gitLogo" src={git} alt="git" />
        </div>
        <div className="slider-div">
          <img className="mySQLLogo" src={mysql} alt="mysql" />
        </div>
        <div className="slider-div">
          <img className="wideImgLogos" src={firebase} alt="firebase" />
        </div>
        <div className="slider-div">
          <img className="skillsLogo" src={mongodb} alt="mongodb" />
        </div>
      </Slider>
      <br />
      <br />
      <br />
    </Container>;
  }
}

export default SimpleSlider;
