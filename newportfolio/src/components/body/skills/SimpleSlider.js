import React from "react";
import Slider from "react-slick";
import { Container, Button, Progress, Grid } from 'semantic-ui-react';
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
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 400,
      vertical: true
    };
    return <Container>
        <Grid>
          <Grid.Column width={8}>
            <Slider {...settings}>
              <div style={styles.sliderStyle}>
                <img style={styles.imageStyle} src={javaScript} alt="javascript" />
              </div>
              <div>
                <Progress percent="33" indicating />
              </div>
              <div style={styles.sliderStyle}>
                <img style={styles.imageStyle} src={jquery} alt="jquery" />
              </div>
              <div style={styles.sliderStyle}>
                <img style={styles.imageStyle} src={node} alt="node" />
              </div>
              <div style={styles.sliderStyle}>
                <img style={styles.expressStyle} src={express} alt="express" />
              </div>
            </Slider>
          </Grid.Column>
          <Grid.Column width={8}>
            <Slider {...settings}>
              <div style={styles.sliderStyle}>
                <img style={styles.imageStyle} src={react} alt="react" />
              </div>
              <div style={styles.sliderStyle}>
                <img style={styles.gitStyle} src={git} alt="git" />
              </div>
              <div style={styles.sliderStyle}>
                <img style={styles.MySQLStyle} src={mysql} alt="mysql" />
              </div>
              <div style={styles.sliderStyle}>
                <img style={styles.wideImgStyle} src={firebase} alt="firebase" />
              </div>
              <div style={styles.sliderStyle}>
                <img style={styles.imageStyle} src={mongodb} alt="mongodb" />
              </div>
            </Slider>
          </Grid.Column>
        </Grid>
        <br />
        <br />
        <br />
      </Container>;
  }
}

const styles = {
  sliderStyle: {
    display: "flex",
    justifyContent: "center"
  },
  imageStyle: {
    height: 120,
    width: 120
  },
  wideImgStyle: {
    height: 100,
    width: 320,
    paddingTop: 15
  },
  expressStyle: {
    height: 100,
    width: 250,
    paddingTop: 25
  },
  gitStyle: {
    height: 100,
    width: 230,
    paddingTop: 10
  },
  MySQLStyle: {
    height: 100,
    width: 190
  }
};

export default SimpleSlider;
