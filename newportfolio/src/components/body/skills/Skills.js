import React, { Component } from "react";
// import { Container } from "semantic-ui-react";
import SimpleSlider from "./SimpleSlider";
import SectionHead from '../../common/SectionHead';

class Skills extends Component {
  render() {
    return (
      <div className="section" id="skills">
        <SectionHead name="Skills" />
        <SimpleSlider />
      </div>
    );
  }
}

export default Skills;
