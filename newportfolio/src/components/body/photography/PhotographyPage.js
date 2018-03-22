import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Photography from "./Photography";
import ParallaxImage from '../../common/ParallaxImage';
import img12 from "../../../assets/images/img12.jpg";
require("../body.css");

class PhotographyPage extends Component {
  render() {
    return (
      <div className="body">
        <ParallaxImage bgImage={img12} words="Photography" />
        <Container id="photogrpahy">
          <br/><br/><br/>
          <Photography />
        </Container>
      </div>
    );
  }
}

export default PhotographyPage;
