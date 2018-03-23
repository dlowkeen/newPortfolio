import React, { Component } from "react";
// import { Container } from "semantic-ui-react";
import { Parallax } from "react-parallax";
import SimpleSlider from "./SimpleSlider";
import SectionHead from '../../common/SectionHead';
import img13 from "../../../assets/images/img13.jpg";
require('./skills.css');

class Skills extends Component {
  render() {
    return (
      <div className="section" id="skills">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={img13}
          bgImageAlt="mountains"
          strength={400}
        >
          <br/><br/>
          <SectionHead name="Skills" />
          <SimpleSlider />
        </Parallax>
      </div>
    );
  }
}

export default Skills;
