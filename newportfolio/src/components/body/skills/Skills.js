import React, { Component } from "react";
// import { Container } from "semantic-ui-react";
import SimpleSlider from "./SimpleSlider";

class Skills extends Component {
  render() {
    return (
      <div className="section" id="skills">
        <h1>Skills</h1>
        <SimpleSlider />
      </div>
    );
  }
}

export default Skills;
