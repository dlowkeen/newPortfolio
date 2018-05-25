import React, { Component } from 'react';
import { Item, Label, Icon, Button, Container } from 'semantic-ui-react';
import SectionHead from '../../common/SectionHead';
import rhiz from "../../../assets/images/rhiz.png";

const paragraph = "Duis mollit irure enim proident aliquip laboris cillum et excepteur voluptate proident."

class Experience extends Component {
  render() {
    return <Container>
        <SectionHead name="Experience" />
        <Item.Group divided>
          <Item>
            <Item.Image as="a" href="https://github.com/dlowkeen/rhiz" size="medium" src={rhiz} />

            <Item.Content>
              <Item.Header style={{ color: "white" }} as="a" href="https://github.com/dlowkeen/rhiz">
                Rhiz
              </Item.Header>
              <Item.Meta style={{ color: "white" }}>
                <span>Software Engineer</span>
              </Item.Meta>
              <Item.Description style={{ color: "white" }}>
                <p>
                  Small business marketplace to help users find businesses
                  using Localeze API and in-network customer reviews.
                </p>
                <p>
                  Contribute to an agile, collaborative environment using
                  CircleCI and Jasmine Unit Tests for automated continuous
                  integration and deployment with GitHub and Heroku.
                </p>
              </Item.Description>
              <Item.Extra>
                <Label>React/Redux</Label>
                <Label>Node/Express</Label>
                <Label>MongoDB</Label>
                <Label>CircleCI</Label>
                <Label>Jasmine Unit Testing</Label>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image as="a" href="https://github.com/dlowkeen/rhiz" size="medium" src={rhiz} />

            <Item.Content>
              <Item.Header style={{ color: "white" }} as="a" href="https://github.com/dlowkeen/rhiz">
                Social Spaces
              </Item.Header>
              <Item.Meta style={{ color: "white" }}>
                <span>Front-End Developer</span>
              </Item.Meta>
              <Item.Description style={{ color: "white" }}>
                <p>
                  Small business marketplace to help users find businesses
                  using Localeze API and in-network customer reviews.
                </p>
                <p>
                  Contribute to an agile, collaborative environment using
                  CircleCI and Jasmine Unit Tests for automated continuous
                  integration and deployment with GitHub and Heroku.
                </p>
              </Item.Description>
              <Item.Extra>
                <Label>React/Redux</Label>
                <Label>Node/Express</Label>
                <Label>MongoDB</Label>
                <Label>CircleCI</Label>
                <Label>Jasmine Unit Testing</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>;
  }
}

export default Experience;
