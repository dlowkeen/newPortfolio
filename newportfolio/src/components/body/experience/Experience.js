import React, { Component } from 'react';
import { Item, Label, Container } from 'semantic-ui-react';
import SectionHead from '../../common/SectionHead';
import rhiz from "../../../assets/images/rhiz.png";
import socialSpaces from '../../../assets/images/socialSpaces.png';

class Experience extends Component {
  render() {
    return <Container>
        <SectionHead name="Experience" />
        <Item.Group divided>
          <Item>
            <Item.Image as="a" href="https://github.com/dlowkeen/rhiz" size="medium" src={rhiz} />

            <Item.Content>
              <Item.Header style={{ color: "white" }} as="a" href="https://github.com/dlowkeen/rhiz">
                Rhiz - Software Engineer
              </Item.Header>
              <Item.Meta style={{ color: "white" }}>
                <span>March 2018 - present</span>
              </Item.Meta>
              <Item.Description style={{ color: "white" }}>
                <p className="bio-text">
                  Small business marketplace to help users find businesses
                  using Localeze API and in-network customer reviews.
                </p>
                <p className="bio-text">
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
            <Item.Image as="a" href="https://github.com/dlowkeen/rhiz" size="medium" src={socialSpaces} />

            <Item.Content>
              <Item.Header style={{ color: "white" }} as="a" href="http://socialspaces.life/">
                Social Spaces - Front-End Developer
              </Item.Header>
              <Item.Meta style={{ color: "white" }}>
                <span>January 2018 - March 2018</span>
              </Item.Meta>
              <Item.Description style={{ color: "white" }}>
                <p className="bio-text">
                  Collaborate with CEO and founders to convert mock up
                  designs into functional website using React/Redux.
                </p>
                <p className="bio-text">
                  Pull user data from social media accounts to create
                  profile dashboard centering around life and work goals.
                </p>
              </Item.Description>
              <Item.Extra>
                <Label>React/Redux</Label>
                <Label>HTML/CSS</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <br />
        <br />
        <br />
      </Container>;
  }
}

export default Experience;
