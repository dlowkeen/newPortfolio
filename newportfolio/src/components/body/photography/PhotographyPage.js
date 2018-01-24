import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import HeaderPhoto from "../../common/HeaderPhoto";
import Landing from "../landing/Landing";
import Photography from "./Photography";
require("../body.css");

class PhotographyPage extends Component {
  render() {
    return (
      <div className="body">
        <HeaderPhoto />
        <Landing />
        <Container>
          <Photography />
        </Container>
      </div>
    );
  }
}

export default PhotographyPage;
