import React, { Component } from "react";
import { Divider, Visibility } from "semantic-ui-react";
import CoverImage from './CoverImage';
require('./landing.css');

class Landing extends Component {
  handleUpdate(e, calculations) {
    console.log(calculations);
  }

  render() {
    return (
      <Visibility>
        <CoverImage />
        <Divider horizontal inverted />
        <Divider horizontal inverted />
      </Visibility>
    );
  }
}

// test

export default Landing;
