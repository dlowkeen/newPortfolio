import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Photography from "./Photography";
import SectionHead from '../../common/SectionHead';
require("../body.css");

class PhotographyPage extends Component {
  render() {
    return (
      <div className="body">
        <Container id="photogrpahy">
          <SectionHead name="Photography" />
          <Photography />
        </Container>
      </div>
    );
  }
}

export default PhotographyPage;
