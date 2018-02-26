import React, { Component } from "react";
import { Container, Button, Progress, Grid } from "semantic-ui-react";
import skills from "./skillsPreview";
import SectionHead from '../../common/SectionHead';

class Skills extends Component {
  constructor() {
    super();
    this.renderSkills = this.renderSkills.bind(this);
  }

  renderSkills() {
    console.log(skills);
    return skills.map(skills => {
      return (
        <div>
          <p id="skillTitle">{skills.name}</p>
          <div>
            <Progress percent={skills.percent} indicating progress>
              {skills.level}
            </Progress>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="section" id="skills">
        <Container>
          <SectionHead name="Skills" />
          {this.renderSkills()}
          <br />
          <br />
        </Container>
      </div>
    );
  }
}

export default Skills;
