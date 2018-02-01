import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import HeaderPhoto from "../../common/HeaderPhoto";
import Landing from "../landing/Landing";
import Photography from "./Photography";
import Footer from "../../common/Footer";
import SectionHead from '../../common/SectionHead';
require("../body.css");

class PhotographyPage extends Component {
  render() {
    return (
      <div className="body">
        <HeaderPhoto />
        <Landing />
        <Container>
          <SectionHead name="Photography" />
          <Photography />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default PhotographyPage;
